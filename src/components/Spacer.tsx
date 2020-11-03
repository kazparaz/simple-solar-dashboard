import { css } from '../styles/css'

export function Spacer(
  props:
    | { readonly height: number }
    | { readonly width: number }
    | {
        readonly height: number
        readonly width: number
      }
): JSX.Element {
  return (
    <div
      class={css.join({
        height: 'height' in props ? props.height : '100%',
        width: 'width' in props ? props.width : '100%',
      })}
    />
  )
}
