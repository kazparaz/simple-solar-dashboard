import type { Component } from 'solid-js'
import { ensureType } from './helpers/utils'
import { Page404 } from './pages/Page404'
import { PageDashboardPlantsElectrical } from './pages/PageDashboardPlantsElectrical/PageDashboardPlantsElectrical'
import { PageDashboardSummary } from './pages/PageDashboardSummary'
import { PageLogin } from './pages/PageLogin'
import { PageNoContent } from './pages/PageNoContent'

export type RoutePath = keyof typeof routes

export type RouteData = {
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
    component: PageDashboardPlantsElectrical,
  },
  '/dashboard/simulation/plants-electrical/add-module': {
    pageTitle: 'Plants & electrical',
    component: PageDashboardPlantsElectrical,
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
