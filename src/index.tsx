/**
 * App entry point
 */

import { Route, Router } from 'solid-app-router'
import { createEffect } from 'solid-js'
import { render } from 'solid-js/dom'
import { assertIsDefined, entries } from './helpers/utils'
import { routes, useRouter } from './routes'
import { addGlobalStyles } from './styles/global'

const appContainerSelector = '#app'
const routesArray = entries(routes).map(([path, { component }]) => ({ path, component }))

// Initiate app
document.addEventListener('DOMContentLoaded', () => renderApp())

function renderApp(): void {
  const container = document.querySelector(appContainerSelector)
  assertIsDefined(container)
  render(
    () => (
      <Router routes={routesArray}>
        <App />
      </Router>
    ),
    container
  )
}

function App(): JSX.Element {
  addGlobalStyles(appContainerSelector)
  createEffect(() => {
    const { current } = useRouter()
    // eslint-disable-next-line functional/immutable-data
    document.title = current ? `${current.pageTitle} | Solar Dashboards` : `Solar Dashboards`
  })
  return <Route />
}
