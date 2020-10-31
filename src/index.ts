/**
 * App entry point
 */

import { render } from 'solid-js/dom'
import { HelloMessage } from './App'

function renderApp() {
  const container = document.getElementById('app')
  if (!container) throw Error('Container for app not found')
  render(() => HelloMessage({ name: 'Kasparas' }), container)
}

document.addEventListener('DOMContentLoaded', () => renderApp())
