import { useRouter as useRouterOriginal } from 'solid-app-router'
import type { Component } from 'solid-js'
import { createSignal, onCleanup } from 'solid-js'
import { ensureType, isKeyOf } from './helpers/utils'
import { Page404 } from './pages/Page404'
import { PageDashboardSummary } from './pages/PageDashboardSummary'
import { PageLogin } from './pages/PageLogin'
import { PageNoContent } from './pages/PageNoContent'

export type RoutePath = keyof typeof routes

type RouteData = {
  readonly pageTitle: string
  readonly component: Component<unknown>
}

export const routes = ensureType<Record<string, RouteData>>()({
  '*': {
    pageTitle: 'Error 404',
    component: Page404,
  },
  '/login': {
    pageTitle: 'Log in',
    component: PageLogin,
  },
  '/dashboard/summary': {
    pageTitle: 'Summary',
    component: PageDashboardSummary,
  },
  '/dashboard/project/meteo': {
    pageTitle: 'Meteo',
    component: PageNoContent,
  },
  '/dashboard/simulation/plants-electrical': {
    pageTitle: 'Plants & electrical',
    component: PageNoContent,
  },
  '/dashboard/calculations/ongoing': {
    pageTitle: 'Ongoing calculations',
    component: PageNoContent,
  },
  '/dashboard/calculations/calculated': {
    pageTitle: 'Calculated',
    component: PageNoContent,
  },
})

// ==============================

// router hook with more strict types
export function useRouter(): (path: RoutePath) => void {
  const router = useRouterOriginal()
  return router.push
}

function getRouteFromLocation(): ({ readonly path: RoutePath } & RouteData) | undefined {
  return isKeyOf(location.pathname, routes)
    ? { path: location.pathname, ...routes[location.pathname] }
    : undefined
}

export function useCurrentRoute(): () => ReturnType<typeof getRouteFromLocation> {
  const [current, setCurrent] = createSignal(getRouteFromLocation())
  const handlePopState = (): void => void setCurrent(getRouteFromLocation())
  window.addEventListener('popstate', handlePopState)
  onCleanup(() => window.removeEventListener('popstate', handlePopState))
  return current
}
