import { cls, createStyles } from '../styles/css'
import { mixins } from '../styles/mixins'
import { Spacer } from './Spacer'

export function BoxSection(props: {
  readonly title?: string
  readonly children: JSX.Element
}): JSX.Element {
  const styles = createStyles({
    section: {
      overflow: 'hidden',
    },
    title: {
      fontSize: 16,
      lineHeight: 1.5,
      fontWeight: 500,
      color: '#BABABA',
    },
  })

  return (
    <section class={styles.section}>
      {!!props.title && (
        <>
          <h2 class={styles.title}>{props.title}</h2>
          <Spacer height={8} />
        </>
      )}
      <div class={cls(mixins.roundSection)}>{props.children}</div>
    </section>
  )
}
