import { css, StrictCSSProperties } from '../styles/css'

export function Flex(props: {
  readonly class?: string
  readonly gap?: number
  readonly justifyContent?: StrictCSSProperties['justifyContent']
  readonly justifyItems?: StrictCSSProperties['justifyItems']
  readonly alignContent?: StrictCSSProperties['alignContent']
  readonly alignItems?: StrictCSSProperties['alignItems']
  readonly children: JSX.Element
}): JSX.Element {
  return (
    <div
      class={css.join(props.class, {
        display: 'flex',
        gap: props.gap,
        justifyContent: props.justifyContent,
        justifyItems: props.justifyItems,
        alignContent: props.alignContent,
        alignItems: props.alignItems,
      })}>
      {props.children}
    </div>
  )
}
