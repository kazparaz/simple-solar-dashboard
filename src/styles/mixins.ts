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
  boxShadows: {
    subtle: {
      boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.45)',
    },
  },
} as const
