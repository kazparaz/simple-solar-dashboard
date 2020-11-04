import { useCurrentRoute } from '../../routes'
import { css } from '../../styles/css'
import { DashboardHeader } from './DashboardHeader'
import { DashboardSidebar } from './DashboardSidebar'

export function TemplateDashboard(props: { readonly children: JSX.Element }): JSX.Element {
  const styles = css.stylesheet({
    dashboard: {
      height: '100%',
      display: 'grid',
      gridTemplateAreas: `"h h"
                          "s m"`,
      gridTemplateRows: '56px auto',
      gridTemplateColumns: '280px auto',
    },
    header: {
      gridArea: 'h',
    },
    sidebar: {
      gridArea: 's',
    },
    main: {
      gridArea: 'm',
    },
  })
  const route = useCurrentRoute()

  return (
    <div class={styles.dashboard}>
      <DashboardHeader class={styles.header} />
      <DashboardSidebar class={styles.sidebar} />
      <main class={styles.main}>
        <h1>{route()?.pageTitle}</h1>

        <div>{props.children}</div>
      </main>
    </div>
  )
}
