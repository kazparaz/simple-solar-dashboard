import { cls, createStyles, StrictNestedCSSProperties } from '../styles/css'
import { Spacer } from './Spacer'

export const inputBaseStyle: StrictNestedCSSProperties = {
  width: '100%',
  height: 33,
  padding: '0 26px 0 10px',
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSize: 12,
  backgroundColor: '#FFFFFF',
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
    '&&&.is-disabled': { backgroundColor: '#EDEDED', borderColor: '#C4C4C4' },
  },
}

export function inputBaseClasses(
  props: Pick<InputBaseProps<unknown>, 'error' | 'disabled'>
): Record<string, boolean> {
  return {
    'is-error': !!props.error,
    'is-disabled': !!props.disabled,
  }
}

export type InputBaseProps<T> = {
  readonly form?: string
  readonly label: string
  readonly name?: string
  readonly placeholder?: string
  readonly required?: boolean
  readonly disabled?: boolean
  readonly error?: string | boolean
  readonly value?: T
  readonly onChange?: (value: T) => void
  readonly onInput?: (value: T) => void
}

export function InputBase<T>(
  props: Pick<InputBaseProps<T>, 'label' | 'error' | 'disabled'> & {
    readonly children: JSX.Element
    readonly inputClass: string
  }
): JSX.Element {
  const styles = createStyles({
    inputComponent: {
      display: 'block',
      width: '100%',
    },
    inputWrap: {
      position: 'relative',
      // prevent additional elements rendered on input to take hover event
      $nest: {
        [`& .${props.inputClass}:hover`]: {
          borderColor: '#878787',
        },
      },
    },
    label: {
      cursor: 'pointer',
      fontWeight: 500,
    },
    labelDisabled: {
      color: '#878787',
    },
    errorMsg: {
      fontSize: 10,
      color: '#D11C32',
    },
  })

  return (
    <div class={styles.inputComponent}>
      <label class={cls(styles.label, { [styles.labelDisabled]: props.disabled })}>
        {props.label}
      </label>
      <Spacer height={3} />

      <div class={styles.inputWrap}>{props.children}</div>

      {typeof props.error === 'string' && (
        <>
          <Spacer height={3} />
          <p class={styles.errorMsg}>{props.error}</p>
        </>
      )}
    </div>
  )
}
