import { useRouter as useRouterOriginal } from 'solid-app-router'
import type { Component } from 'solid-js'
import { ensureType, entries } from './helpers/utils'
import { Page404 } from './pages/Page404'
import { PageDashboardSummary } from './pages/PageDashboardSummary'
import { PageLogin } from './pages/PageLogin'

export type PageRoute = keyof typeof routes

export const routes = ensureType<
  Record<
    string,
    {
      readonly pageTitle: string
      readonly component: Component<unknown>
    }
  >
>()({
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
    component: Page404,
  },
  '/dashboard/simulation/plants-electrical': {
    pageTitle: 'Plants & electrical',
    component: Page404,
  },
  '/dashboard/calculations/ongoing': {
    pageTitle: 'Ongoing calculations',
    component: Page404,
  },
  '/dashboard/calculations/calculated': {
    pageTitle: 'Calculated',
    component: Page404,
  },
})

// router hook with more sugar
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/explicit-function-return-type
export const useRouter = () => {
  const router = useRouterOriginal()
  const match = entries(routes).find(
    ([, { component }]) => component === router.current?.[0].handler.component
  )
  return {
    ...router,
    current: match ? { route: match[0], ...match[1] } : undefined,
    push: (route: PageRoute) => router.push(route),
  } as const
}
