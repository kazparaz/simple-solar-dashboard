import { Icon } from '../../components/Icon'
import { Link } from '../../components/Link'
import { Spacer } from '../../components/Spacer'
import { css } from '../../styles/css'

export function DashboardHeader(props: { readonly class: string }): JSX.Element {
  const styles = css.stylesheet({
    header: {
      paddingLeft: 28,
      paddingRight: 24,
      backgroundColor: '#1F1F1F',
      color: '#FFFFFF',
      fontSize: 14,
      // tricky layout to get middle item always in the middle
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      alignItems: 'center',
      justifyContent: 'space-between',
      $nest: { '& > *': css.mixins.layout.flexCenter },
    },
    left: {
      ...css.mixins.layout.flexCenter,
      marginRight: 'auto',
    },
    middle: {
      ...css.mixins.layout.flexCenter,
      margin: 'auto',
      fontWeight: 700,
      fontSize: 16,
    },
    right: {
      ...css.mixins.layout.flexCenter,
      marginLeft: 'auto',
    },
    avatar: {
      ...css.mixins.layout.flexCenter,
      width: 24,
      height: 24,
      backgroundColor: '#FFFFFF',
      color: '#1F1F1F',
      borderRadius: '100%',
      fontSize: 14,
    },
  })

  return (
    <header class={css.join(styles.header, props.class)}>
      <div>
        <Link class={styles.left} href="/login">
          <Icon symbol="home" />
          <Spacer width={10} />
          <span>Back to projects</span>
        </Link>
      </div>
      <div>
        <p class={styles.middle}>Kaunas park</p>
      </div>
      <div>
        <Link class={styles.right}>
          <span>Tester Testman</span>
          <Spacer width={16} />
          <span class={styles.avatar}>A</span>
        </Link>
      </div>
    </header>
  )
}
