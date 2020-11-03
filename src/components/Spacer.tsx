import { css } from '../styles/css'

export function Spacer({ height }: { readonly height: number }): JSX.Element {
  const styles = css.stylesheet({ spacer: { height, width: '100%' } })

  return <div class={styles.spacer} />
}
