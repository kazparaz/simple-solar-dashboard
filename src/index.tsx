/**
 * App entry point
 */

import { Route, Router } from 'solid-app-router'
import { render } from 'solid-js/dom'
import { assertIsDefined } from './helpers'
import { routes } from './routes'
import { addGlobalStyles } from './styles/global'

const appContainerSelector = '#app'
const routesArray = Object.entries(routes).map(([path, component]) => ({ path, component }))

function App(): JSX.Element {
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
