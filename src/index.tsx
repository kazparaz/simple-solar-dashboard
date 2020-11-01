/**
 * App entry point
 */

import { Route, Router } from 'solid-app-router'
import type { Component } from 'solid-js'
import { render } from 'solid-js/dom'
import { PageLogin } from './components/pages/PageLogin'
import { assertIsDefined, ensureType } from './helpers'
import { addGlobalStyles } from './styles/global'

const appContainerSelector = '#app'

export type Routes = keyof typeof routes

const routes = ensureType<Record<string, Component<unknown>>>()({
  '*': () => <div>404 Page not found</div>,
  '/': () => <div>Homepage</div>,
  '/login': PageLogin,
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
