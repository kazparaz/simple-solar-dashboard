/**
 * Export all styling related things
 */
/* eslint-disable no-restricted-imports */

import * as typestyle from 'typestyle'
import * as mixins from './mixins'
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

type StrictNestedCSSProperties = StrictCSSProperties & {
  readonly $nest?: Readonly<
    Record<keyof typestyle.types.NestedCSSSelectors, StrictNestedCSSProperties>
  >
  readonly $debugName?: string
}

// ==============================

// more strict types and auto convert styles to class name
function join(
  ...values: ReadonlyArray<undefined | string | Record<string, boolean> | StrictCSSProperties>
): string {
  return typestyle.classes(
    ...values.map((value) => {
      if (typeof value === 'string' || typeof value === 'undefined') return value
      if (Object.values(value).every((v) => typeof v === 'boolean')) return value
      return typestyle.style(value)
    })
  )
}

function rule(selector: string, ...objects: readonly StrictNestedCSSProperties[]): void {
  return typestyle.cssRule(selector, ...objects)
}

function stylesheet<T extends string>(
  classes: Record<T, StrictNestedCSSProperties>
): Record<T, string> {
  return typestyle.stylesheet(classes)
}

function style(...objects: readonly StrictNestedCSSProperties[]): string {
  return typestyle.style(...objects)
}

export const css = {
  join,
  rule,
  stylesheet,
  mixins,
  style,
  raw: typestyle.cssRaw,
}