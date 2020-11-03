import { css } from '../styles/css'

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
  },
})

export function Button(props: {
  readonly text: string
  readonly type: JSX.ButtonHTMLAttributes<unknown>['type']
}): JSX.Element {
  return <button class={styles.button}>{props.text}</button>
}
