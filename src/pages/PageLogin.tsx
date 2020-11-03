import { useRouter } from 'solid-app-router'
import { createState } from 'solid-js'
import { Button } from '../components/Button'
import { Grid } from '../components/Grid'
import { Input } from '../components/Input'
import { Link } from '../components/Link'
import { Spacer } from '../components/Spacer'
import { api } from '../helpers/api'
import Logo from '../images/PVcase-logo.svg'
import { css } from '../styles/css'

export function PageLogin(): JSX.Element {
  const [state, setState] = createState({
    inputs: { username: '', password: '' },
    status: undefined as undefined | 'success' | 'fail' | 'loading',
  })
  const styles = css.stylesheet({
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
      ...css.mixins.grid({
        justifyContent: 'center',
        alignContent: 'center',
        justifyItems: 'center',
      }),
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
    footer: {
      color: '#FFFFFF',
      fontSize: 16,
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
    <div class={styles.loginWrap}>
      <div class={css.join(styles.loginBox, styles.roundBox)}>
        <Grid justifyItems="center">
          <img src={Logo} alt="PVcase logo" />
          <Spacer height={24} />
          <h1>Log in</h1>
          <Spacer height={14} />
          <p class={styles.loginSubText}>Enter your details below</p>
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

      <Spacer height={40} />
      <p class={styles.footer}>
        Don’t have an account?{' '}
        <Link class={styles.footer} underline>
          Sign Up
        </Link>
      </p>
    </div>
  )
}
