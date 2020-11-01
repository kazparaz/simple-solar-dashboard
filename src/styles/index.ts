/**
 * Export all styling related things
 */

import * as flex from 'csstips/lib/flex'
import { border, percent } from 'csx'
import { classes, stylesheet, style } from 'typestyle'
import type { CSSProperties } from 'typestyle/lib/types'
import * as styleguide from './styleguide'

export const guide = styleguide

// better typing and auto convert styles to string
function improvedClasses(...values: ReadonlyArray<string | Record<string, boolean> | CSSProperties>): string {
  return classes(
    ...values.map((value) => {
      if (typeof value === 'string') return value
      if (Object.values(value).every((v) => typeof v === 'boolean')) return value
      // if CSSProperties
      return style(value)
    })
  )
}

export const utils = {
  classes: improvedClasses,
  style,
  stylesheet,
  flex,
  percent,
  border,
}
