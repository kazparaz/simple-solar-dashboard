import { createSignal } from 'solid-js'
import { Spacer } from '../../components/Spacer'
import { useCurrentRoute } from '../../helpers/hooks'
import { createStyles, extend, media } from '../../styles/css'
import { br } from '../../styles/mixins'
import { DashboardHeader } from './DashboardHeader'
import { DashboardSidebar } from './DashboardSidebar'

export function TemplateDashboard(props: { readonly children: JSX.Element }): JSX.Element {
  const styles = createStyles({
    dashboard: extend(
      {
        position: 'relative',
        minHeight: '100%',
        display: 'grid',
        gridTemplateAreas: `"h h"
                          "s m"`,
        gridTemplateRows: '56px auto',
        gridTemplateColumns: '280px auto',
      },
      media({ maxWidth: 1100 }, { gridTemplateColumns: '200px auto' }),
      media(br.sidebar, {
        gridTemplateAreas: `"h"
                            "m"`,
        gridTemplateRows: '56px auto',
        gridTemplateColumns: 'auto',
      })
    ),
    header: {
      gridArea: 'h',
    },
    sidebar: extend({ gridArea: 's' }),
    main: extend(
      {
        gridArea: 'm',
        padding: '64px 45px 45px',
        maxWidth: 800 + 2 * 45,
        width: '100%',
        margin: '0 auto',
        minWidth: 0,
      },
      media(br.sidebar, { padding: '32px 16px 40px' })
    ),
    spacer: media(br.sidebar, { $nest: { '&&': { height: 24 } } }),
  })

  const route = useCurrentRoute()
  const [sidebar, setSidebar] = createSignal(false)

  return (
    <div class={styles.dashboard}>
      <DashboardHeader class={styles.header} onSidebarToggle={() => setSidebar(!sidebar())} />
      <DashboardSidebar class={styles.sidebar} open={sidebar} />
      <main class={styles.main}>
        <h1>{route()?.pageTitle}</h1>
        <Spacer class={styles.spacer} height={52} />
        <div>{props.children}</div>
      </main>
    </div>
  )
}
