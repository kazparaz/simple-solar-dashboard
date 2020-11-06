import { cls, createStyles } from '../styles/css'
import { Icon } from './Icon'
import { InputBaseProps, inputBaseStyle, inputBaseClasses, InputBase } from './InputBase'

export type InputSelectTypes<T extends string> = { readonly values: readonly T[] } & InputBaseProps<
  T
>

export function InputSelect<T extends string>(props: InputSelectTypes<T>): JSX.Element {
  const styles = createStyles({
    inputClass: {
      ...inputBaseStyle,
      paddingRight: 30,
      appearance: 'none',
      '-moz-appearance': 'none',
    },
    arrow: {
      position: 'absolute',
      top: 16,
      right: 15,
      pointerEvents: 'none',
    },
  })

  return (
    <InputBase {...props} inputClass={styles.inputClass}>
      <select
        class={cls(styles.inputClass, inputBaseClasses(props))}
        form={props.form}
        name={props.name}
        required={props.required}
        disabled={props.disabled}
        value={props.value}
        onInput={(e) => props.onInput?.(e.target.value as T)}
        onChange={(e) => props.onChange?.(e.target.value as T)}>
        {!props.value && (
          <option hidden disabled selected>
            {props.placeholder}
          </option>
        )}
        {props.values.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>
      <Icon class={styles.arrow} symbol="selectDown" />
    </InputBase>
  )
}
