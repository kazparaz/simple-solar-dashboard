import { Link as RouterLink } from 'solid-app-router'
import type { PageRoute } from '../routes'
import { css } from '../styles/css'

export function Link(
  props: {
    readonly children: JSX.Element
    readonly class?: string
    readonly underline?: boolean
  } & (
    | { readonly href?: string }
    | { readonly route: PageRoute }
    | { readonly onClick: () => void }
  )
): JSX.Element {
  const styles = css.stylesheet({
    link: { textDecoration: props.underline ? 'underline' : 'none' },
  })

  return 'route' in props ? (
    <RouterLink class={css.join(styles.link, props.class)} href={props.route}>
      {props.children}
    </RouterLink>
  ) : (
    <a
      class={css.join(styles.link, props.class)}
      href={'href' in props ? props.href : 'javascript:void(0)'}
      onClick={() => 'onClick' in props && props.onClick()}>
      {props.children}
    </a>
  )
}
