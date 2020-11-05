import type { RoutePath } from '../routes'
import { cls, createStyles } from '../styles/css'
import { mixins } from '../styles/mixins'
import { Link } from './Link'

export function Button(props: {
  readonly children: string
  readonly class?: string
  readonly theme?: 'primary' | 'secondary'
  readonly size?: 'default' | 'small' | 'medium'
  readonly disabled?: boolean
  readonly type?: JSX.ButtonHTMLAttributes<unknown>['type']
  readonly href?: string | RoutePath
  readonly onClick?: () => void
}): JSX.Element {
  const styles = createStyles({
    button: {
      appearance: 'none',
      borderRadius: 4,
      borderStyle: 'solid',
      borderWidth: 1,
      cursor: 'pointer',
      fontFamily: 'Inter, system-ui, sans-serif',
      textAlign: 'center',
      ...mixins.boxShadows.subtle,

      $nest: {
        '&:focus': {
          outline: 'none',
        },
        '&:disabled': {
          opacity: 0.75,
          cursor: 'default',
        },
        '&.size-default': {
          height: 40,
          padding: '0 16px',
          fontSize: 14,
          fontWeight: 500,
        },
        '&.size-medium': {
          height: 32,
          padding: '0 16px',
          fontSize: 14,
          fontWeight: 500,
        },
        '&.size-small': {
          height: 24,
          padding: '0 16px',
          fontSize: 10,
          fontWeight: 500,
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
        },
        '&.theme-primary': {
          backgroundColor: '#20554E',
          color: '#FFFFFF',
          borderColor: '#0B382B',
          $nest: {
            '&:hover:not(:disabled)': {
              backgroundColor: '#32736A',
              borderColor: '#20554E',
            },
          },
        },
        '&.theme-secondary': {
          backgroundColor: '#FAFAFA',
          color: '#24665D',
          borderColor: '#CCCCCC',
          $nest: {
            '&:hover:not(:disabled)': {
              backgroundColor: '#EDEDED',
              borderColor: '#BABABA',
            },
            '&.size-small': {
              color: '#000000',
              borderColor: '#DEDEDE',
            },
          },
        },
      },
    },
    isLink: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      $nest: { '&:hover': { opacity: 1 } },
    },
  })
  const classes = cls(
    styles.button,
    props.class,
    `theme-${props.theme ?? 'primary'}`,
    `size-${props.size ?? 'default'}`,
    { [styles.isLink]: !!props.href }
  )
  return props.href ? (
    <Link class={classes} href={props.href} onClick={() => props.onClick?.()}>
      {props.children}
    </Link>
  ) : (
    <button
      class={classes}
      disabled={props.disabled}
      type={props.type ?? 'button'}
      onClick={() => props.onClick?.()}>
      {props.children}
    </button>
  )
}
