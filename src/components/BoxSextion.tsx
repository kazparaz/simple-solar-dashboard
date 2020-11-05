import { css } from '../styles/css'
import { Spacer } from './Spacer'

export function BoxSection(props: {
  readonly title?: string
  readonly children: JSX.Element
}): JSX.Element {
  const styles = css.stylesheet({
    title: {
      fontSize: 16,
      lineHeight: 1.5,
      fontWeight: 500,
      color: '#BABABA',
    },
  })

  return (
    <section>
      {!!props.title && (
        <>
          <h2 class={styles.title}>{props.title}</h2>
          <Spacer height={8} />
        </>
      )}
      <div class={css.join(css.mixins.roundSection)}>{props.children}</div>
    </section>
  )
}
