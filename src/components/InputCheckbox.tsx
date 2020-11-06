import { cls, createStyles } from '../styles/css'
import { Flex } from './Flex'
import { Icon } from './Icon'
import type { InputBaseProps } from './InputBase'
import { Spacer } from './Spacer'

export function InputCheckbox(
  props: Pick<
    InputBaseProps<boolean>,
    'form' | 'label' | 'name' | 'disabled' | 'required' | 'value' | 'onChange'
  >
): JSX.Element {
  const styles = createStyles({
    inputCheckbox: {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: 16,
      cursor: 'pointer',
    },
    real: {
      position: 'absolute',
      opacity: 0,
    },
    fake: {
      width: 16,
      height: 16,
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#C4C4C4',
      borderRadius: 3,
      color: '#FFFFFF',
    },
    fakeChecked: {
      backgroundColor: '#20554E',
      borderColor: '#0B382B',
    },
  })

  return (
    <label class={styles.inputCheckbox}>
      <input
        class={styles.real}
        form={props.form}
        type="checkbox"
        name={props.name}
        required={props.required}
        disabled={props.disabled}
        checked={props.value}
        onChange={(e) => props.onChange?.(e.target.checked)}
      />
      <Flex
        class={cls(styles.fake, { [styles.fakeChecked]: props.value })}
        alignItems="center"
        justifyContent="center">
        {props.value && <Icon symbol="check" size={10} />}
      </Flex>
      <Spacer width={12} />
      {props.label}
    </label>
  )
}
