import { stylesheet } from 'typestyle'
import { sg, css } from '../styles'

const styles = stylesheet({
  button: {
    appearance: 'none',
    height: 40,
    width: '100%',
    padding: '0 10px',
    background: sg.colors['#20554E'],
    color: sg.colors['#FFFFFF'],
    borderRadius: 4,
    border: css.border({ width: 1, style: 'solid', color: sg.colors['#0B382B'] }),
    ...sg.fontSize['14'],
    cursor: 'pointer',
  },
})

export function Button(props: {
  readonly text: string
  readonly type: JSX.ButtonHTMLAttributes<unknown>['type']
}): JSX.Element {
  return <button class={styles.button}>{props.text}</button>
}
