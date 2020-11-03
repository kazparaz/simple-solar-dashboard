/**
 * Export all styling related things
 */

import * as flex from 'csstips/lib/flex'
import { border } from 'csx'
import { classes, stylesheet, style } from 'typestyle'
import type { CSSProperties } from 'typestyle/lib/types'
import * as styleguide from './styleguide'

// more strict types and auto convert styles to class name
function classJoin(...values: ReadonlyArray<string | Record<string, boolean> | CSSProperties>): string {
  return classes(
    ...values.map((value) => {
      if (typeof value === 'string') return value
      if (Object.values(value).every((v) => typeof v === 'boolean')) return value
      // if CSSProperties
      return style(value)
    })
  )
}

export const sg = styleguide

export const css = {
  class: classJoin,
  stylesheet,
  // style,
  flex,
  border,
}

// TODO only allowed
// More strict types for css properties
declare module 'typestyle/lib/types' {
  type Color = 'blu'
  // eslint-disable-next-line functional/prefer-type-literal
  export interface CSSProperties {
    readonly color?: 'currentColor' | keyof typeof sg.colors
  }
}
