import { createState } from 'solid-js'
import { css } from '../styles/css'
import { Icon } from './Icon'
import { Spacer } from './Spacer'

export function Input(props: {
  readonly label: string
  readonly name?: string
  readonly type: 'text' | 'password' | 'email'
  readonly required?: boolean
  readonly disabled?: boolean
  readonly error?: string | boolean
  readonly onChange?: (value: string) => void
  readonly onInput?: (value: string) => void
}): JSX.Element {
  const [state, setState] = createState({
    value: '',
    get status() {
      return props.error ? 'error' : props.disabled ? 'disabled' : 'default'
    },
  })

  const styles = css.stylesheet({
    inputComponent: {
      display: 'block',
      width: '100%',
    },
    label: {
      cursor: 'pointer',
    },
    inputWrap: {
      position: 'relative',
    },
    input: {
      width: '100%',
      height: 33,
      padding: '0 26px 0 10px',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 3,
      borderColor: '#C4C4C4',
      fontSize: 12,
      $nest: {
        '&:hover:not(:disabled)': {
          borderColor: '#878787',
        },
        '&:focus': {
          outline: 'none',
          borderColor: '#1E8072',
        },
        '&&.is-error': { borderColor: '#D11C32' },
      },
    },
    clear: {
      position: 'absolute',
      right: 12,
      top: 8,
    },
    errorMsg: {
      fontSize: 10,
      color: '#D11C32',
    },
  })

  return (
    <div class={styles.inputComponent}>
      <label class={styles.label}>{props.label}</label>
      <Spacer height={3} />

      <div class={styles.inputWrap}>
        <input
          class={css.join(styles.input, `is-${state.status}`)}
          name={props.name}
          type={props.type}
          required={props.required}
          disabled={props.disabled}
          value={state.value}
          onInput={(e) => {
            setState('value', e.target.value)
            props.onInput?.(e.target.value)
          }}
          onChange={(e) => props.onChange?.(e.target.value)}
        />

        {!!state.value && state.status !== 'disabled' && (
          <a class={styles.clear} href="javascript:void(0)" onClick={() => setState('value', '')}>
            <Icon symbol="x" color="#878787" />
          </a>
        )}
      </div>

      {typeof props.error === 'string' && (
        <>
          <Spacer height={3} />
          <p class={styles.errorMsg}>{props.error}</p>
        </>
      )}
    </div>
  )
}
