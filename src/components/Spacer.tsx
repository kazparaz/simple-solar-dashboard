import { utils } from '../styles'

export function Spacer({ height }: { readonly height: number }): JSX.Element {
  const css = utils.stylesheet({ spacer: { height } })

  return <div class={css.spacer} />
}
