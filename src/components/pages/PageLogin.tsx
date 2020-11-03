import { useRouter } from 'solid-app-router'
import { createState, Show } from 'solid-js'
import { api } from '../../helpers/api'
import Logo from '../../images/PVcase-logo.svg'
import { sg, css } from '../../styles'
import { Button } from '../Button'
import { Input } from '../Input'
import { Spacer } from '../Spacer'

const style = css.stylesheet({
  roundBox: {
    padding: 32,
    background: sg.colors['#FFFFFF'],
    borderRadius: 8,
    border: css.border({ width: 1, style: 'solid', color: sg.colors['#0B382B'] }),
    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.4)',
  },
  loginWrap: {
    width: '100%',
    height: '100%',
    background: sg.colors['#262626'],
  },
  loginBox: {
    minWidth: 364,
  },
  loginSubText: {
    ...sg.fontSize['16'],
    color: sg.colors['#C4C4C4'],
  },
})

export function PageLogin(): JSX.Element {
  const [state, setState] = createState({
    inputs: { username: '', password: '' },
    status: undefined as undefined | 'success' | 'failed' | 'loading',
  })
  const { router } = useRouter()

  async function handleLogin(): Promise<void> {
    setState({ status: 'loading' })
    const response = await api.login(state.inputs)
    if ('error' in response) {
      setState({ status: 'failed' })
      console.log(response.error)
    }
    if ('success' in response && response.success) {
      setState({ status: 'success' })
      return router.push('/dashboard')
    }
    setState({ status: 'failed' })
  }

  return (
    <div class={css.class(style.loginWrap, css.flex.centerCenter)}>
      <div class={css.class(style.loginBox, style.roundBox, css.flex.vertical, css.flex.center)}>
        <img src={Logo} alt="PVcase logo" />
        <Spacer height={28} />
        <h1>Log in</h1>
        <Spacer height={14} />
        <p class={style.loginSubText}>Enter your details below</p>
        <Spacer height={53} />

        <Show when={state.status === 'failed'}>
          <h4 class={css.class({ color: '#D11C32' })}>Login failed</h4>
          <Spacer height={10} />
        </Show>
        <Show when={state.status === 'loading'}>
          <h4>Loading...</h4>
          <Spacer height={10} />
        </Show>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            void handleLogin()
          }}>
          <Input
            label="Name"
            type="text"
            required
            onChange={(v) => setState({ inputs: { ...state.inputs, username: v } })}
          />
          <Spacer height={24} />
          <Input
            label="Password"
            type="password"
            required
            onChange={(v) => setState({ inputs: { ...state.inputs, password: v } })}
          />
          <Spacer height={24} />
          <Button text="Log in" type="submit" />
        </form>
      </div>
    </div>
  )
}
