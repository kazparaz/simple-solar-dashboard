/**
 * App entry point
 */

import { render } from 'solid-js/dom'
import { HelloMessage } from './App'
import { assertIsDefined } from './helpers'

function renderApp(): void {
  const container = document.getElementById('app')
  assertIsDefined(container)
  render(() => HelloMessage({ name: 'Hiiiii' }), container)
}

document.addEventListener('DOMContentLoaded', () => renderApp())
