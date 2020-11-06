import { cls } from '../styles/css'

export function Spacer(props: {
  readonly class?: string
  readonly grow?: true
  readonly height?: number
  readonly width?: number
}): JSX.Element {
  return (
    <div
      class={cls(
        {
          height: props.height ? props.height : undefined,
          width: props.width ? props.width : undefined,
          flexGrow: props.grow ? 999 : undefined,
        },
        props.class
      )}
    />
  )
}
