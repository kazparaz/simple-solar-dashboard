import { cls, createStyle, createStyles } from '../styles/css'
import { Icon } from './Icon'
import { InputBaseProps, inputBaseStyle, inputBaseClasses, InputBase } from './InputBase'
import { Link } from './Link'

export function InputText(
  props: { readonly type: 'text' | 'password' | 'email' } & InputBaseProps<string>
): JSX.Element {
  const inputClass = createStyle(inputBaseStyle)
  const styles = createStyles({
    clear: {
      position: 'absolute',
      right: 6,
      top: '50%',
      transform: 'translateY(-50%)',
      padding: 6,
    },
  })

  return (
    <InputBase {...props} inputClass={inputClass}>
      <input
        class={cls(inputClass, inputBaseClasses(props))}
        form={props.form}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        required={props.required}
        disabled={props.disabled}
        value={props.value}
        autocomplete="off"
        onInput={(e) => props.onInput?.(e.target.value)}
        onChange={(e) => props.onChange?.(e.target.value)}
      />

      <Link
        class={cls(styles.clear, { display: !!props.value && !props.disabled ? 'block' : 'none' })}
        onClick={() => {
          props.onInput?.('')
          props.onChange?.('')
        }}>
        <Icon symbol="x" color="#878787" />
      </Link>
    </InputBase>
  )
}
