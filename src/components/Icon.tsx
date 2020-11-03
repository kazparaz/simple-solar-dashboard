import { css, StrictCSSProperties } from '../styles/css'

const symbols = {
  x: () => (
    <svg width="7" height="8" viewBox="0 0 7 8">
      <path d="M3.49316 3.30371L5.13379 0.603516H6.61035L4.19043 4.26074L6.68555 8H5.22266L3.51367 5.23145L1.80469 8H0.334961L2.83008 4.26074L0.410156 0.603516H1.87305L3.49316 3.30371Z" />
    </svg>
  ),
}

export function Icon(props: {
  readonly symbol: keyof typeof symbols
  readonly color?: StrictCSSProperties['color']
}): JSX.Element {
  const style = css.stylesheet({
    icon: {
      $nest: { '> svg': { fill: props.color || 'currentColor' } },
    },
  })

  return <span class={style.icon}>{symbols[props.symbol]}</span>
}
