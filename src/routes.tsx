import type { Component } from 'solid-js'
import { ensureType } from './helpers'
import { PageDashboardSummary } from './pages/PageDashboardSummary'
import { PageLogin } from './pages/PageLogin'

export type Routes = keyof typeof routes

export const routes = ensureType<Record<string, Component<unknown>>>()({
  '*': () => <h1>404: Page not found</h1>,
  '/login': PageLogin,
  '/dashboard': PageDashboardSummary,
  '/dashboard/summary': PageDashboardSummary,
  '/dashboard/plants-electrical': () => 'Plants & electrical',
})
