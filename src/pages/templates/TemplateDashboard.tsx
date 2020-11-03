import { DashboardHeader } from './DashboardHeader'
import { DashboardSidebar } from './DashboardSidebar'

export function TemplateDashboard(props: { readonly children: JSX.Element }): JSX.Element {
  return (
    <div>
      <DashboardHeader />
      <DashboardSidebar />
      <main>{props.children}</main>
    </div>
  )
}
