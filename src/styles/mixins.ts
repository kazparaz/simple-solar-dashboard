import type { MediaQuery } from 'typestyle/lib/types'
import { ensureType } from '../helpers/utils'

export const mixins = {
  modal: {
    padding: 32,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#0B382B',
    borderRadius: 8,
    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.4)',
  },
  roundSection: {
    padding: 24,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    borderColor: '#DEDEDE',
  },
} as const

export const br = ensureType<Record<string, MediaQuery>>()({
  mobile: { maxWidth: 400 },
  mobileL: { minWidth: 401, maxWidth: 768 },
  tablet: { minWidth: 769, maxWidth: 1024 },
  sidebar: { maxWidth: 1020 },
  desktop: { minWidth: 1025 },
})
