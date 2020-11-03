import { css, StrictCSSProperties } from '../styles/css'

const symbols = {
  x: () => (
    <svg width="7" height="8" viewBox="0 0 7 8">
      <path d="M3.49316 3.30371L5.13379 0.603516H6.61035L4.19043 4.26074L6.68555 8H5.22266L3.51367 5.23145L1.80469 8H0.334961L2.83008 4.26074L0.410156 0.603516H1.87305L3.49316 3.30371Z" />
    </svg>
  ),
  home: () => (
    <svg width="20" height="18" viewBox="0 0 20 18">
      <path d="M10.3813 0.793954C10.1912 0.622817 9.90252 0.622817 9.71237 0.793954L1.06225 8.57908C0.721637 8.88562 0.938486 9.45072 1.39673 9.45072H3.07969V16.9132C3.07969 17.1894 3.30354 17.4132 3.57969 17.4132H8.05626V11.4414H12.0375V17.4132H16.5141C16.7902 17.4132 17.0141 17.1894 17.0141 16.9132V9.45072H18.697C19.1553 9.45072 19.3721 8.88562 19.0315 8.57908L10.3813 0.793954Z" />
    </svg>
  ),
}

export function Icon(props: {
  readonly symbol: keyof typeof symbols
  readonly color?: StrictCSSProperties['color']
}): JSX.Element {
  const style = css.stylesheet({
    icon: {
      display: 'block',
      $nest: {
        '> svg': {
          display: 'block',
          fill: props.color || 'currentColor',
        },
      },
    },
  })

  return <span class={style.icon}>{symbols[props.symbol]}</span>
}
