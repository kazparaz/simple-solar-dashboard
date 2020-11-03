import { Link } from 'solid-app-router'
import type { Routes } from '..'

export function RouteLink(props: { readonly title: string; readonly route: Routes }): JSX.Element {
  return (
    <Link class="nav" href={props.route}>
      {props.title}
    </Link>
  )
}
