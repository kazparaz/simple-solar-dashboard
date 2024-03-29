/**
 * Export all styling related things
 */
/* eslint-disable no-restricted-imports */

import * as typestyle from 'typestyle'
import { MediaQuery } from 'typestyle/lib/types'
import { ensureArray } from '../helpers/utils'
import type { StyleGuide } from './styleguide'

// disallow shorthand rules for better typechecking
type DisallowedCSSProperties = 'border' | 'background'

type OverriddenCSSProperties = {
  readonly color?: StyleGuide['colors']
  readonly backgroundColor?: StyleGuide['colors']
  readonly borderColor?: StyleGuide['colors']
  readonly fontSize?: StyleGuide['fontSize']
  readonly fontFamily?: StyleGuide['fontFamily']
  readonly fontWeight?: StyleGuide['fontWeight']
}

export type StrictCSSProperties = {
  readonly [K in Exclude<
    keyof typestyle.types.CSSProperties,
    DisallowedCSSProperties
  >]?: typestyle.types.CSSProperties[K]
} &
  OverriddenCSSProperties

export type StrictNestedCSSProperties = StrictCSSProperties & {
  readonly $nest?: Readonly<
    Record<keyof typestyle.types.NestedCSSSelectors, StrictNestedCSSProperties>
  >
  readonly $debugName?: string
}

// ==============================

// more strict types and auto convert styles to class name
export function cls(
  ...values: ReadonlyArray<undefined | string | Record<string, boolean> | StrictCSSProperties>
): string {
  return typestyle.classes(
    ...values.map((value) => {
      if (typeof value === 'string' || typeof value === 'undefined') return value
      if (Object.values(value).some((v) => typeof v === 'boolean')) return value
      return typestyle.style(value)
    })
  )
}

export function rule(selector: string, ...objects: readonly StrictNestedCSSProperties[]): void {
  return typestyle.cssRule(selector, ...objects)
}

export function createStyles<T extends string>(
  classes: Record<T, StrictNestedCSSProperties>
): Record<T, string> {
  return typestyle.stylesheet(classes)
}

export function createStyle(...objects: readonly StrictNestedCSSProperties[]): string {
  return typestyle.style(...objects)
}

export function raw(css: string): void {
  return typestyle.cssRaw(css)
}

export function extend(
  ...objects: readonly StrictNestedCSSProperties[]
): StrictNestedCSSProperties {
  return typestyle.extend(...objects) as StrictNestedCSSProperties
}

export function media(
  medias: typestyle.types.MediaQuery | ReadonlyArray<typestyle.types.MediaQuery>,
  object: StrictNestedCSSProperties
): StrictNestedCSSProperties {
  const mediaArray = ensureArray(medias)
  return extend(
    ...mediaArray.map((media) => typestyle.media(media, object) as StrictNestedCSSProperties)
  )
}
