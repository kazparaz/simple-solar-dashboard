import Logo from '../../images/PVcase-logo.svg'
import { guide, utils } from '../../styles'
import { Button } from '../Button'
import { Input } from '../Input'
import { Spacer } from '../Spacer'

const css = utils.stylesheet({
  roundBox: {
    padding: 32,
    background: guide.colors['#FFFFFF'],
    borderRadius: 8,
    border: utils.border({ width: 1, style: 'solid', color: guide.colors['#DEDEDE'] }),
    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.4)',
  },
  loginWrap: {
    width: utils.percent(100),
    height: utils.percent(100),
    background: guide.colors['#262626'],
  },
  loginBox: {
    minWidth: 364,
  },
  loginSubText: {
    ...guide.fontSize['16'],
    color: guide.colors['#C4C4C4'],
  },
})

export function PageLogin(): JSX.Element {
  return (
    <div class={utils.classes(css.loginWrap, utils.flex.centerCenter)}>
      <div class={utils.classes(css.loginBox, css.roundBox, utils.flex.vertical, utils.flex.center)}>
        <img src={Logo} alt="PVcase logo" />
        <Spacer height={28} />
        <h1>Log in</h1>
        <Spacer height={14} />
        <p class={css.loginSubText}>Enter your details below</p>
        <Spacer height={53} />
        <Input label="Email" type="email" />
        <Spacer height={24} />
        <Input label="Password" type="password" />
        <Spacer height={24} />
        <Button text="Log in" type={'primary'} />
        <Button text="Log in" type={'secondary'} />
      </div>
    </div>
  )
}
