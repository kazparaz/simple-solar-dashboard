import { css } from '../styles'

export function Spacer({ height }: { readonly height: number }): JSX.Element {
  const styles = css.stylesheet({ spacer: { height } })

  return <div class={styles.spacer} />
}
