/**
 * App entry point
 */

import { Route, Router } from 'solid-app-router'
import type { Component } from 'solid-js'
import { render } from 'solid-js/dom'
import { assertIsDefined, ensureType } from './helpers'
import { PageDashboardSummary } from './routes/PageDashboardSummary'
import { PageLogin } from './routes/PageLogin'
import { addGlobalStyles } from './styles/global'

const appContainerSelector = '#app'

export type Routes = keyof typeof routes

const routes = ensureType<Record<string, Component<unknown>>>()({
  '*': () => <h1>404: Page not found</h1>,
  '/login': PageLogin,
  '/dashboard': PageDashboardSummary,
  '/dashboard/summary': PageDashboardSummary,
  '/dashboard/plants-electrical': () => 'Plants & electrical',
})

function App(): JSX.Element {
  const routesArray = Object.entries(routes).map(([path, component]) => ({ path, component }))

  return (
    <Router routes={routesArray}>
      <Route />
    </Router>
  )
}

function renderApp(): void {
  const container = document.querySelector(appContainerSelector)
  assertIsDefined(container)
  render(() => App(), container)
}

// Initiate app
document.addEventListener('DOMContentLoaded', () => renderApp())
addGlobalStyles(appContainerSelector)
