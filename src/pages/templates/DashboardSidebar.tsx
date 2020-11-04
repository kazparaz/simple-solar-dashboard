import { For } from 'solid-js'
import { Link } from '../../components/Link'
import { routes, PageRoute, useRouter } from '../../routes'
import { css } from '../../styles/css'

const navigation: ReadonlyArray<{
  readonly groupName?: string
  readonly items: ReadonlyArray<{ readonly route: PageRoute; readonly meta?: JSX.Element }>
}> = [
  {
    items: [{ route: '/dashboard/summary' }],
  },
  {
    groupName: 'Project parameters',
    items: [{ route: '/dashboard/project/meteo' }],
  },
  {
    groupName: 'Simulation parameters',
    items: [{ route: '/dashboard/simulation/plants-electrical' }],
  },
  {
    groupName: 'Calculations',
    items: [
      { route: '/dashboard/calculations/ongoing' },
      { route: '/dashboard/calculations/calculated', meta: '22' },
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
      paddingBottom: 16,
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
  const router = useRouter()

  return (
    <aside class={css.join(styles.sidebar, props.class)}>
      <For each={navigation}>
        {({ groupName, items }) => (
          <section class={styles.group}>
            {groupName && <h4 class={styles.groupName}>{groupName}</h4>}
            <For each={items}>
              {(item) => (
                <SidebarItem {...item} isSelected={router.current?.route === item.route} />
              )}
            </For>
          </section>
        )}
      </For>
    </aside>
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
  const { pageTitle } = routes[props.route]

  return (
    <Link
      class={css.join(styles.item, { [styles.isSelected]: props.isSelected })}
      route={props.route}>
      {pageTitle}
      <span class={styles.meta}>{props.meta}</span>
    </Link>
  )
}
