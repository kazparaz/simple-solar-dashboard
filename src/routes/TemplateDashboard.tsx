import { Icon } from '../components/Icon'
import { Spacer } from '../components/Spacer'
import { css } from '../styles/css'

function DashboardHeader(): JSX.Element {
  const styles = css.stylesheet({
    header: {
      height: 56,
      paddingLeft: 28,
      paddingRight: 24,
      backgroundColor: '#1F1F1F',
      color: '#FFFFFF',
      fontSize: 14,
      // tricky layout to get middle item always in the middle
      ...css.mixins.grid({
        gridTemplateColumns: 'repeat(3, 1fr)',
        alignItems: 'center',
        justifyContent: 'space-between',
      }),
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
    <header class={styles.header}>
      <div>
        <a class={styles.left} href="javascript:void(0)">
          <Icon symbol="home" />
          <Spacer width={10} />
          <span>Back to projects</span>
        </a>
      </div>
      <div>
        <p class={styles.middle}>Kaunas park</p>
      </div>
      <div>
        <a class={styles.right} href="javascript:void(0)">
          <span>Tester Testman</span>
          <Spacer width={16} />
          <span class={styles.avatar}>A</span>
        </a>
      </div>
    </header>
  )
}

export function TemplateDashboard(props: { readonly children: JSX.Element }): JSX.Element {
  return (
    <div>
      <DashboardHeader />
      <main>{props.children}</main>
      <footer>Footer</footer>
      <aside>Sidebar</aside>
    </div>
  )
}
