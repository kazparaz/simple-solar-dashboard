import { Link } from 'solid-app-router'
import type { Routes } from '..'

export function RouteLink({ title, route }: { readonly title: string; readonly route: Routes }): JSX.Element {
  return (
    <Link class="nav" href={route}>
      {title}
    </Link>
  )
}
