import { css } from '../styles/css'

export function Spacer(props: { readonly height: number }): JSX.Element {
  return <div class={css.join({ height: props.height, width: '100%' })} />
}
