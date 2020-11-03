import { createState, Show } from 'solid-js'
import { css } from '../styles/css'
import { Icon } from './Icon'
import { Spacer } from './Spacer'

const styles = css.stylesheet({
  inputWrap: {
    display: 'block',
    width: '100%',
  },
  label: {
    cursor: 'pointer',
  },
  input: {
    width: '100%',
    height: 33,
    padding: '0 10px',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 3,
    fontSize: 12,
    $nest: {
      '&:hover': {
        borderColor: '#878787',
      },
      '&:focus': {
        outline: 'none',
        borderColor: '#1E8072',
      },
    },
  },
})

export function Input(props: {
  readonly label: string
  readonly name?: string
  readonly type: 'text' | 'password' | 'email'
  readonly required?: boolean
  readonly onChange?: (value: string) => void
}): JSX.Element {
  const [state, setState] = createState({ value: '' })

  return (
    <label class={styles.inputWrap}>
      <div class={styles.label}>{props.label}</div>
      <Spacer height={3} />
      <input
        class={styles.input}
        name={props.name}
        type={props.type}
        required
        value={state.value}
        onInput={(e) => setState({ value: e.target.value })}
        onChange={(e) => props.onChange?.(e.target.value)}
      />
      <Show when={state.value.length > 0}>
        <a href="javascript:void(0)" onClick={() => setState({ value: '' })}>
          <Icon key="x" />
        </a>
      </Show>
    </label>
  )
}
