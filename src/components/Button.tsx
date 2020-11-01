import { stylesheet } from 'typestyle'
import { guide, utils } from '../styles'

const css = stylesheet({
  button: {
    height: 40,
    width: utils.percent(100),
    background: guide.colors['#20554E'],
    color: guide.colors['#FFFFFF'],
    borderRadius: 4,
    appearance: 'none',
    border: utils.border({ width: 1, style: 'solid', color: guide.colors['#0B382B'] }),
    ...guide.fontSize['14'],
  },
})

export function Button(props: { readonly text: string; readonly type?: 'primary' | 'secondary' }): JSX.Element {
  return <button class={css.button}>{props.text}</button>
}
