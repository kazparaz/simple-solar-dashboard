import { isKeyOf } from '../helpers/utils'
import { useRouter, RoutePath, routes } from '../routes'
import { css } from '../styles/css'

export function Link(props: {
  readonly children: JSX.Element
  readonly class?: string
  readonly underline?: boolean
  readonly href?: string | RoutePath
  readonly onClick?: () => void
}): JSX.Element {
  const styles = css.stylesheet({
    link: { textDecoration: props.underline ? 'underline' : 'none' },
  })
  const router = useRouter()
  return (
    <a
      class={css.join(styles.link, props.class)}
      href={props.href || 'javascript:void(0)'}
      onClick={(event) => {
        if (isKeyOf(props.href, routes)) {
          event.preventDefault()
          router(props.href)
          dispatchEvent(new PopStateEvent('popstate')) // needed for useCurrentRoute
        }
        return props.onClick?.()
      }}>
      {props.children}
    </a>
  )
}
