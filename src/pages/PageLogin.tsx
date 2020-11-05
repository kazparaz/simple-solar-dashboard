import { createState } from 'solid-js'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Link } from '../components/Link'
import { Spacer } from '../components/Spacer'
import { api } from '../helpers/api'
import Logo from '../images/PVcase-logo.svg'
import { useRouter } from '../routes'
import { createStyles } from '../styles/css'
import { mixins } from '../styles/mixins'

export function PageLogin(): JSX.Element {
  const [state, setState] = createState({
    inputs: { username: '', password: '' },
    status: undefined as 'success' | 'fail' | 'loading' | undefined,
  })
  const styles = createStyles({
    loginWrap: {
      display: 'grid',
      justifyContent: 'center',
      alignContent: 'center',
      justifyItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: '#262626',
    },
    loginBox: {
      ...mixins.modal,
      width: 364,
    },
    loginTop: {
      textAlign: 'center',
    },
    loginSubText: {
      fontSize: 16,
      fontWeight: 500,
      color: '#C4C4C4',
    },
    loginBtn: {
      width: '100%',
    },
    footer: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 500,
    },
  })

  const router = useRouter()

  async function handleLogin(): Promise<void> {
    setState('status', 'loading')
    const response = await api.login(state.inputs)
    if ('success' in response && response.success) {
      setState('status', 'success')
      router('/dashboard/summary')
      return
    }
    if ('error' in response) {
      console.log(response.error)
    }
    setState('status', 'fail')
  }

  return (
    <div class={styles.loginWrap}>
      <div class={styles.loginBox}>
        <div class={styles.loginTop}>
          <img src={Logo} alt="PVcase logo" />
          <Spacer height={24} />
          <h1>Log in</h1>
          <Spacer height={14} />
          <p class={styles.loginSubText}>Enter your details below</p>
          <Spacer height={53} />
        </div>

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
          <Button class={styles.loginBtn} type="submit" disabled={state.status === 'loading'}>
            Log in
          </Button>
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
