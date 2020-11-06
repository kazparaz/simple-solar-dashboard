import { Flex } from '../../components/Flex'
import { Icon } from '../../components/Icon'
import { Link } from '../../components/Link'
import { Spacer } from '../../components/Spacer'
import { cls, createStyles, extend, media } from '../../styles/css'
import { br } from '../../styles/mixins'

export function DashboardHeader(props: {
  readonly class: string
  readonly onSidebarToggle: () => void
}): JSX.Element {
  const styles = createStyles({
    header: extend(
      {
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
        $nest: {
          '> *': {
            display: 'flex',
            justifyItems: 'center',
            alignContent: 'center',
          },
        },
      },
      media(br.sidebar, {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        paddingLeft: 16,
        paddingRight: 16,
        zIndex: 101,
      })
    ),
    left: {
      marginRight: 'auto',
      fontWeight: 500,
    },
    middle: {
      margin: 'auto',
      fontWeight: 700,
      fontSize: 16,
    },
    right: {
      marginLeft: 'auto',
    },
    avatar: {
      width: 24,
      height: 24,
      backgroundColor: '#FFFFFF',
      color: '#1F1F1F',
      borderRadius: '100%',
      fontSize: 14,
    },
    toggle: extend(
      {
        marginRight: 20,
      },
      media({ minWidth: br.sidebar.maxWidth + 1 }, { display: 'none' })
    ),
    hideOnMobile: media(br.sidebar, { display: 'none' }),
  })

  return (
    <header class={cls(styles.header, props.class)}>
      <Flex alignItems="center">
        <Link class={styles.toggle} onClick={() => props.onSidebarToggle()}>
          <Icon symbol="menu" />
        </Link>

        <Link class={styles.left} href="/login">
          <Flex alignItems="center">
            <Icon symbol="home" />
            <Spacer class={styles.hideOnMobile} width={10} />
            <span class={styles.hideOnMobile}>Back to projects</span>
          </Flex>
        </Link>
      </Flex>
      <div>
        <p class={styles.middle}>Kaunas park</p>
      </div>
      <div>
        <Link class={styles.right}>
          <Flex alignItems="center">
            <span class={styles.hideOnMobile}>Tester Testman</span>
            <Spacer class={styles.hideOnMobile} width={16} />
            <Flex justifyContent="center" alignItems="center" class={styles.avatar}>
              A
            </Flex>
          </Flex>
        </Link>
      </div>
    </header>
  )
}
