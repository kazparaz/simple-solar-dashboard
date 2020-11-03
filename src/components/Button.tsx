import { css } from '../styles/css'

export function Button(props: {
  readonly text: string
  readonly disabled?: boolean
  readonly type: JSX.ButtonHTMLAttributes<unknown>['type']
}): JSX.Element {
  const styles = css.stylesheet({
    button: {
      appearance: 'none',
      height: 40,
      width: '100%',
      padding: '0 10px',
      backgroundColor: '#20554E',
      color: '#FFFFFF',
      borderRadius: 4,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#0B382B',
      fontSize: 14,
      cursor: 'pointer',
      ...css.mixins.boxShadow.subtle,

      $nest: {
        '&:hover:not(:disabled)': {
          backgroundColor: '#32736A',
          borderColor: '#20554E',
        },
        '&:disabled': {
          opacity: 0.75,
          cursor: 'default',
        },
      },
    },
  })

  return (
    <button class={styles.button} disabled={props.disabled}>
      {props.text}
    </button>
  )
}
