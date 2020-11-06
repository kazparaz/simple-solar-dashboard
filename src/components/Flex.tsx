import type { StrictCSSProperties } from '../styles/css'
import { cls, createStyles } from '../styles/css'

export function Flex(props: {
  readonly class?: string
  readonly gap?: number
  readonly flexWrap?: boolean
  readonly flexDirection?: StrictCSSProperties['flexDirection']
  readonly justifyContent?: StrictCSSProperties['justifyContent']
  readonly justifyItems?: StrictCSSProperties['justifyItems']
  readonly alignContent?: StrictCSSProperties['alignContent']
  readonly alignItems?: StrictCSSProperties['alignItems']
  readonly children: JSX.Element
}): JSX.Element {
  const styles = createStyles({
    flex: {
      display: 'flex',
      gap: props.gap,
      flexWrap: props.flexWrap ? 'wrap' : undefined,
      flexDirection: props.flexDirection,
      justifyContent: props.justifyContent,
      justifyItems: props.justifyItems,
      alignContent: props.alignContent,
      alignItems: props.alignItems,
    },
  })
  return <div class={cls(props.class, styles.flex)}>{props.children}</div>
}
