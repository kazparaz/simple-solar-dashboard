import { Link } from 'solid-app-router'
import type { routes } from '../App'

export function RouteLink({
  title,
  route,
}: {
  readonly title: string
  readonly route: keyof typeof routes
}): JSX.Element {
  return (
    <Link class="nav" href={route}>
      {title}
    </Link>
  )
}
