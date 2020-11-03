/**
 * Styles related to whole app
 */

// TODO - fix, when new snowpack is released
import { normalize } from 'csstips/lib/normalize'
import { setupPage } from 'csstips/lib/page'
import { cssRaw, cssRule } from 'typestyle'
import { colors, fontFamily, fontSize } from './styleguide'

export function addGlobalStyles(appContainerSelector: string): void {
  // This must be the first CSS rule, because @import only works if its at the top of the file
  cssRaw(`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap')`)

  // Normalize browsers styles
  // @see https://typestyle.github.io/#/page
  normalize()
  setupPage(appContainerSelector)

  cssRule('body', {
    ...fontFamily.interNormal,
    ...fontSize['12'],
    lineHeight: 1.2,
    color: colors['#000000'],
  })

  // make block elements not to have any spaces, for easier styling
  cssRule('div, header, main, footer, ul, ol, li, nav, section, h1, h2, h3, h4, h5, h6, p', {
    margin: 0,
    padding: 0,
  })

  cssRule('h1, h2, h3, h4, h5, h6', {
    ...fontSize['12'],
  })

  cssRule('h1', {
    ...fontSize['24'],
  })

  cssRule('h2', {
    ...fontSize['18'],
  })

  cssRule('h3', {
    ...fontSize['16'],
  })
}
