import type { StrictCSSProperties } from '../styles/css'
import { cls, createStyles } from '../styles/css'

export function Grid(props: {
  readonly class?: string
  readonly gap?: number
  readonly columns?: number
  readonly gridTemplateColumns?: StrictCSSProperties['gridTemplateColumns']
  readonly gridTemplateRows?: StrictCSSProperties['gridTemplateRows']
  readonly justifyContent?: StrictCSSProperties['justifyContent']
  readonly justifyItems?: StrictCSSProperties['justifyItems']
  readonly alignContent?: StrictCSSProperties['alignContent']
  readonly alignItems?: StrictCSSProperties['alignItems']
  // eslint-disable-next-line functional/prefer-readonly-type
  readonly children: JSX.Element[]
}): JSX.Element {
  const styles = createStyles({
    grid: {
      display: 'grid',
      gap: props.gap,
      gridTemplateColumns:
        props.gridTemplateColumns ??
        `repeat(${props.columns ?? props.children.length}, minmax(0, 1fr))`,
      gridTemplateRows: props.gridTemplateRows,
      justifyContent: props.justifyContent,
      justifyItems: props.justifyItems,
      alignContent: props.alignContent,
      alignItems: props.alignItems,
    },
  })
  return <div class={cls(props.class, styles.grid)}>{props.children}</div>
}
