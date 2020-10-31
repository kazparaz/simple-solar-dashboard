/**
 * App entry point
 */

import { render } from 'solid-js/dom'
import { App } from './App'
import { assertIsDefined } from './helpers'

function renderApp(): void {
  const container = document.getElementById('app')
  assertIsDefined(container)
  render(() => App(), container)
}

document.addEventListener('DOMContentLoaded', () => renderApp())
