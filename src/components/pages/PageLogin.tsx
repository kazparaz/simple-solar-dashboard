import { useRouter } from 'solid-app-router'
import { createState } from 'solid-js'
import { api } from '../../helpers/api'
import Logo from '../../images/PVcase-logo.svg'
import { css } from '../../styles/css'
import { Button } from '../Button'
import { Grid } from '../Grid'
import { Input } from '../Input'
import { Spacer } from '../Spacer'

export function PageLogin(): JSX.Element {
  const [state, setState] = createState({
    inputs: { username: '', password: '' },
    status: undefined as undefined | 'success' | 'fail' | 'loading',
  })
  const style = css.stylesheet({
    roundBox: {
      padding: 32,
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#0B382B',
      boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.4)',
    },
    loginWrap: {
      width: '100%',
      height: '100%',
      backgroundColor: '#262626',
    },
    loginBox: {
      width: 364,
    },
    loginSubText: {
      fontSize: 16,
      color: '#C4C4C4',
    },
  })

  const router = useRouter()

  async function handleLogin(): Promise<void> {
    setState('status', 'loading')
    const response = await api.login(state.inputs)
    if ('success' in response && response.success) {
      setState('status', 'success')
      router.push('/dashboard')
      return
    }
    if ('error' in response) {
      console.log(response.error)
    }
    setState('status', 'fail')
  }

  return (
    <Grid class={css.join(style.loginWrap)} justifyContent="center" alignContent="center">
      <div class={css.join(style.loginBox, style.roundBox)}>
        <Grid justifyItems="center">
          <img src={Logo} alt="PVcase logo" />
          <Spacer height={24} />
          <h1>Log in</h1>
          <Spacer height={14} />
          <p class={style.loginSubText}>Enter your details below</p>
          <Spacer height={53} />
        </Grid>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            void handleLogin()
          }}>
          <Input
            label="Name"
            type="text"
            required
            disabled={state.status === 'loading'}
            error={state.status === 'fail'}
            onChange={(v) => setState('inputs', 'username', v)}
          />
          <Spacer height={24} />
          <Input
            label="Password"
            type="password"
            required
            disabled={state.status === 'loading'}
            error={state.status === 'fail' ? 'Login failed' : undefined}
            onChange={(v) => setState('inputs', 'password', v)}
          />
          <Spacer height={40} />
          <Button text="Log in" type="submit" disabled={state.status === 'loading'} />
        </form>
      </div>
    </Grid>
  )
}
