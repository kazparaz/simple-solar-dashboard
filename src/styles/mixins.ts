import type { StrictCSSProperties } from './css'

export const boxShadow = {
  subtle: {
    boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.45)',
  },
}

export const layout = {
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

// ==============================

type GridParentCssProps = Pick<
  StrictCSSProperties,
  | 'alignContent'
  | 'alignItems'
  | 'gap'
  | 'gridAutoFlow'
  | 'gridTemplate'
  | 'gridTemplateColumns'
  | 'gridTemplateRows'
  | 'justifyContent'
  | 'justifyItems'
>

export function grid(
  props: {
    readonly rows?: number
    readonly columns?: number
  } & Readonly<Partial<GridParentCssProps>>
): StrictCSSProperties {
  return {
    display: 'grid',
    ...props,
  }
}
