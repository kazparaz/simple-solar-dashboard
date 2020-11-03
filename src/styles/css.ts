/**
 * Export all styling related things
 */
/* eslint-disable no-restricted-imports */

import * as flex from 'csstips/lib/flex'
import * as typestyle from 'typestyle'
import type { StyleGuide } from './styleguide'

type AllowedDefaultCSSProperties =
  | 'margin'
  | 'display'
  | 'minWidth'
  | 'padding'
  | 'lineHeight'
  | 'appearance'
  | 'height'
  | 'width'
  | 'borderRadius'
  | 'borderStyle'
  | 'borderWidth'
  | 'cursor'
  | 'fill'
  | 'outline'
  | 'boxShadow'

type OverriddenCSSProperties = {
  readonly color?: StyleGuide['colors']
  readonly backgroundColor?: StyleGuide['colors']
  readonly borderColor?: StyleGuide['colors']
  readonly fontSize?: StyleGuide['fontSize']
  readonly fontFamily?: StyleGuide['fontFamily']
  readonly fontWeight?: StyleGuide['fontWeight']
}

export type StrictCSSProperties = { readonly [K in AllowedDefaultCSSProperties]?: typestyle.types.CSSProperties[K] } &
  OverriddenCSSProperties

type StrictNestedCSSProperties = StrictCSSProperties & {
  readonly $nest?: Readonly<Record<keyof typestyle.types.NestedCSSSelectors, StrictNestedCSSProperties>>
  readonly $debugName?: string
}

// ==============================

// more strict types and auto convert styles to class name
function join(
  ...values: ReadonlyArray<string | Record<string, boolean> | StrictCSSProperties | typestyle.types.CSSProperties>
): string {
  return typestyle.classes(
    ...values.map((value) => {
      if (typeof value === 'string') return value
      if (Object.values(value).every((v) => typeof v === 'boolean')) return value
      return typestyle.style(value)
    })
  )
}

function rule(selector: string, ...objects: readonly StrictNestedCSSProperties[]): void {
  return typestyle.cssRule(selector, ...objects)
}

function stylesheet<T extends string>(classes: Record<T, StrictNestedCSSProperties>): Record<T, string> {
  return typestyle.stylesheet(classes)
}

export const css = {
  join,
  rule,
  stylesheet,
  raw: typestyle.cssRaw,
  flex,
}
