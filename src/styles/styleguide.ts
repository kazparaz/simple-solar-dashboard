/**
 * Defines shared styleguide
 */
import { px } from 'csx'
import type { CSSProperties } from 'typestyle/lib/types'
import { ensureType } from '../helpers'

// Defining colors by value makes easier to refactor instead of using generic names
export const colors = {
  '#000000': '#000000',
  '#0B382B': '#0B382B',
  '#1B544C': '#1B544C',
  '#1C5C7B': '#1C5C7B',
  '#1E8072': '#1E8072',
  '#1F1F1F': '#1F1F1F',
  '#20554E': '#20554E',
  '#24665D': '#24665D',
  '#262626': '#262626',
  '#6E9B95': '#6E9B95',
  '#878787': '#878787',
  '#BABABA': '#BABABA',
  '#C4C4C4': '#C4C4C4',
  '#CCCCCC': '#CCCCCC',
  '#D0E4E1': '#D0E4E1',
  '#D11C32': '#D11C32',
  '#DEDEDE': '#DEDEDE',
  '#E4F0EE': '#E4F0EE',
  '#EDEDED': '#EDEDED',
  '#EDF4F7': '#EDF4F7',
  '#FAFAFA': '#FAFAFA',
  '#FFFFFF': '#FFFFFF',
} as const

export const fontFamily = ensureType<Record<string, CSSProperties>>()({
  interNormal: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: 500,
  },
  interBold: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: 700,
  },
} as const)

export const fontSize = ensureType<Record<string, CSSProperties>>()({
  24: { fontSize: 24, lineHeight: px(29) },
  18: { fontSize: 18, lineHeight: px(22) },
  16: { fontSize: 16, lineHeight: px(19) },
  14: { fontSize: 14, lineHeight: px(16) },
  12: { fontSize: 12, lineHeight: px(15) },
} as const)
