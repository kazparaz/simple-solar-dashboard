import { Route, Router } from 'solid-app-router'
import { PageLogin } from './pages/PageLogin'
import type { Component } from 'solid-js'
import { ensureTypeExtends } from './helpers'
import './styles/test.css'

// Route interface is not exported in "solid-app-router" and needs some fixes
// type Route = Parameters<typeof Router>[0]['pages'][number] & {
//   readonly data: Parameters<typeof Router>[0]['pages'][number]['data']
// }

export const routes = ensureTypeExtends<Record<string, Component<unknown>>>()({
  '*': () => <div>404 Page not found</div>,
  '/': () => <div>Homepage</div>,
  '/login': PageLogin,
})

export function App(): JSX.Element {
  const routesArray = Object.entries(routes).map(([path, component]) => ({
    path,
    component,
    data: () => ({}), // without data property, router does not work :(
  }))

  return (
    <Router routes={routesArray}>
      <Route />
    </Router>
  )
}
