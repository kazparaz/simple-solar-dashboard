import { css, StrictCSSProperties } from '../styles/css'

// TODO remove if not used
export function Grid(props: {
  readonly class?: string
  readonly columns?: number
  readonly gap?: StrictCSSProperties['gap']
  readonly justifyContent?: StrictCSSProperties['justifyContent']
  readonly justifyItems?: StrictCSSProperties['justifyItems']
  readonly alignContent?: StrictCSSProperties['alignContent']
  readonly alignItems?: StrictCSSProperties['alignItems']
  readonly children: JSX.Element
}): JSX.Element {
  return (
    <div
      class={css.join(props.class, {
        display: 'grid',
        gap: props.gap,
        gridTemplateColumns: props.columns ? `repeat(${props.columns}, 1fr)` : undefined,
        justifyContent: props.justifyContent,
        justifyItems: props.justifyItems,
        alignContent: props.alignContent,
        alignItems: props.alignItems,
      })}>
      {props.children}
    </div>
  )
}
