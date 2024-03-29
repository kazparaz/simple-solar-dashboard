/**
 * Styles related to whole app
 */

import { normalize } from 'csstips/lib/normalize'
import { setupPage } from 'csstips/lib/page'
import { raw, rule } from './css'

export function addGlobalStyles(appContainerSelector: string): void {
  // must be at the top of the stylesheet
  raw(
    `@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");`
  )

  // Normalize browsers styles
  // @see https://typestyle.github.io/#/page
  normalize()
  setupPage(appContainerSelector)

  rule('body', {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: 12,
    lineHeight: 1.2,
    color: '#000000',
  })

  // make block elements not to have any spaces, for easier layout
  rule('div, header, main, footer, ul, ol, li, nav, section, h1, h2, h3, h4, h5, h6, p', {
    margin: 0,
    padding: 0,
  })

  rule('h1', { fontSize: 24, fontWeight: 700 })
  rule('h2', { fontSize: 18, fontWeight: 700 })
  rule('h3', { fontSize: 16, fontWeight: 500 })
  rule('h4, h5, h6', { fontSize: 12, fontWeight: 500 })

  rule('a', {
    color: 'inherit',
    textDecoration: 'none',
    $nest: { '&:hover': { opacity: 0.8 } },
  })

  rule('img', { maxWidth: '100%' })
}
