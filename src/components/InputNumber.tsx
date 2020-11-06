import { cls, createStyle, createStyles } from '../styles/css'
import { InputBaseProps, inputBaseStyle, inputBaseClasses, InputBase } from './InputBase'

export function InputNumber(
  props: {
    readonly unit?: string
    readonly step?: number
    readonly min?: number
    readonly max?: number
  } & InputBaseProps<number>
): JSX.Element {
  const inputClass = createStyle({
    ...inputBaseStyle,
    paddingRight: 44,
    $nest: {
      '&::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
      },
    },
  })
  const styles = createStyles({
    unit: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: 14,
      color: '#C4C4C4',
    },
  })

  return (
    <InputBase {...props} inputClass={inputClass}>
      <input
        class={cls(inputClass, inputBaseClasses(props))}
        form={props.form}
        name={props.name}
        placeholder={props.placeholder}
        type="number"
        step={props.step}
        min={props.min}
        max={props.max}
        required={props.required}
        disabled={props.disabled}
        value={props.value}
        onInput={(e) => props.onInput?.(e.target.valueAsNumber)}
        onChange={(e) => props.onChange?.(e.target.valueAsNumber)}
      />

      {!!props.unit && <span class={styles.unit}>{props.unit}</span>}
    </InputBase>
  )
}
