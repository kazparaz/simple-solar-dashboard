import { Link } from '../../components/Link'
import { routes, RoutePath, useCurrentRoute } from '../../routes'
import { css } from '../../styles/css'

const navigation: ReadonlyArray<{
  readonly groupName?: string
  readonly items: ReadonlyArray<{ readonly path: RoutePath; readonly meta?: JSX.Element }>
}> = [
  {
    items: [{ path: '/dashboard/summary' }],
  },
  {
    groupName: 'Project parameters',
    items: [{ path: '/dashboard/project/meteo' }],
  },
  {
    groupName: 'Simulation parameters',
    items: [{ path: '/dashboard/simulation/plants-electrical' }],
  },
  {
    groupName: 'Calculations',
    items: [
      { path: '/dashboard/calculations/ongoing' },
      { path: '/dashboard/calculations/calculated', meta: '22' },
    ],
  },
]

export function DashboardSidebar(props: { readonly class: string }): JSX.Element {
  const styles = css.stylesheet({
    sidebar: {
      backgroundColor: '#FAFAFA',
    },
    group: {
      paddingTop: 16,
      paddingBottom: 15,
      $nest: {
        '&:not(:last-child)': {
          borderWidth: '0 0 1px 0',
          borderStyle: 'solid',
          borderColor: '#EDEDED',
        },
      },
    },
    groupName: {
      fontSize: 10,
      fontWeight: 700,
      color: '#C4C4C4',
      textTransform: 'uppercase',
      padding: '0 24px 7px 24px',
    },
  })
  const route = useCurrentRoute()

  return (
    <nav class={css.join(styles.sidebar, props.class)}>
      {navigation.map(({ groupName, items }) => (
        <section class={styles.group}>
          {groupName && <h4 class={styles.groupName}>{groupName}</h4>}
          {items.map((item) => (
            <SidebarItem
              path={item.path}
              meta={item.meta}
              isSelected={route()?.path === item.path}
            />
          ))}
        </section>
      ))}
    </nav>
  )
}

function SidebarItem(
  props: { readonly isSelected: boolean } & typeof navigation[number]['items'][number]
): JSX.Element {
  const styles = css.stylesheet({
    item: {
      display: 'grid',
      gridAutoFlow: 'column',
      justifyContent: 'space-between',
      alignContent: 'center',
      padding: '12px 24px',
      fontSize: 14,
      fontWeight: 500,
    },
    isSelected: {
      backgroundColor: '#D0E4E1',
      color: '#24665D',
      fontWeight: 700,
    },
    meta: {
      color: '#878787',
    },
  })
  const { pageTitle } = routes[props.path]

  return (
    <Link
      class={css.join(styles.item, { [styles.isSelected]: props.isSelected })}
      href={props.path}>
      {pageTitle}
      <span class={styles.meta}>{props.meta}</span>
    </Link>
  )
}
