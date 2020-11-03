/**
 * Styles related to whole app
 */

// eslint-disable-next-line no-restricted-imports
// TODO - fix, when new snowpack is released
import { normalize } from 'csstips/lib/normalize'
import { setupPage } from 'csstips/lib/page'
import { css } from './css'

export function addGlobalStyles(appContainerSelector: string): void {
  // @import must be at the top of the stylesheet
  css.raw(`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap')`)

  // Normalize browsers styles
  // @see https://typestyle.github.io/#/page
  normalize()
  setupPage(appContainerSelector)

  css.rule('body', {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: 12,
    lineHeight: 1.2,
    color: '#000000',
  })

  // make block elements not to have any spaces, for easier styling
  css.rule('div, header, main, footer, ul, ol, li, nav, section, h1, h2, h3, h4, h5, h6, p', {
    margin: 0,
    padding: 0,
  })

  css.rule('h1, h2, h3, h4, h5, h6', {
    fontSize: 12,
  })

  css.rule('h1', {
    fontSize: 24,
  })

  css.rule('h2', {
    fontSize: 18,
  })

  css.rule('h3', {
    fontSize: 16,
  })

  css.rule('a', {
    color: 'inherit',
    textDecoration: 'none',

    $nest: {
      '&:hover': {
        opacity: 0.8,
      },
    },
  })
}
