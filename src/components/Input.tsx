import { guide, utils } from '../styles'
import { Spacer } from './Spacer'

const css = utils.stylesheet({
  inputWrap: {
    display: 'block',
    width: utils.percent(100),
  },
  label: {
    cursor: 'pointer',
  },
  input: {
    width: utils.percent(100),
    height: 33,
    border: utils.border({ width: 1, style: 'solid', color: guide.colors['#C4C4C4'] }),
    borderRadius: 3,
    $nest: {
      '&:hover': {
        borderColor: guide.colors['#878787'],
      },
    },
  },
})

export function Input({
  label,
  name,
  type,
}: {
  readonly label: string
  readonly name?: string
  readonly type: 'text' | 'password' | 'email'
}): JSX.Element {
  return (
    <label class={css.inputWrap}>
      <div class={css.label}>{label}</div>
      <Spacer height={3} />
      <Spacer height={3} />
      <input class={css.input} {...{ name, type }} />
    </label>
  )
}
