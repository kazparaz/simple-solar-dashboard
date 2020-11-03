import { createState } from 'solid-js'
import { css } from '../styles/css'
import { Icon } from './Icon'
import { Link } from './Link'
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
  const inputClass = css.style({
    width: '100%',
    height: 33,
    padding: '0 26px 0 10px',
    fontSize: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#C4C4C4',
    borderRadius: 3,
    outline: 'none',
    $nest: {
      '&&&:focus': {
        borderColor: '#1E8072',
      },
      '&&&.is-error': { borderColor: '#D11C32' },
      '&&&.is-disabled': { borderColor: '#C4C4C4' },
    },
  })

  const styles = css.stylesheet({
    inputComponent: {
      display: 'block',
      width: '100%',
    },
    label: { cursor: 'pointer' },
    inputWrap: {
      position: 'relative',
      // clear button removes hover from input, so we define it here
      $nest: {
        [`& .${inputClass}:hover`]: {
          borderColor: '#878787',
        },
      },
    },
    clear: {
      position: 'absolute',
      right: 6,
      top: '50%',
      transform: 'translateY(-50%)',
      padding: 6,
    },
    errorMsg: {
      fontSize: 10,
      color: '#D11C32',
    },
  })

  const [state, setState] = createState({
    value: '',
    get status() {
      return props.error ? 'error' : props.disabled ? 'disabled' : 'default'
    },
  })

  return (
    <div class={styles.inputComponent}>
      <label class={styles.label}>{props.label}</label>
      <Spacer height={3} />

      <div class={styles.inputWrap}>
        <input
          class={css.join(inputClass, `is-${state.status}`)}
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
          <Link class={styles.clear} onClick={() => setState('value', '')}>
            <Icon symbol="x" color="#878787" />
          </Link>
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
