import { createSignal, createState } from 'solid-js'
import { Button } from '../components/Button'
import { Grid } from '../components/Grid'
import { InputText } from '../components/InputText'
import { Link } from '../components/Link'
import { Spacer } from '../components/Spacer'
import { api } from '../helpers/api'
import { useFormFields } from '../helpers/hooks'
import Logo from '../images/PVcase-logo.svg'
import { useRouter } from '../routes'
import { createStyles } from '../styles/css'
import { mixins } from '../styles/mixins'

export function PageLogin(): JSX.Element {
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
  const [status, setStatus] = createSignal(undefined as 'success' | 'fail' | 'loading' | undefined)

  const [fields] = useFormFields({
    name: {
      label: 'Name',
      type: 'text',
      required: true,
      value: '',
    },
    password: {
      label: 'Password',
      type: 'password',
      required: true,
      value: '',
    },
  })

  const router = useRouter()

  async function handleLogin(): Promise<void> {
    setStatus('loading')
    const response = await api.login({
      username: fields.name.value,
      password: fields.password.value,
    })
    if ('success' in response && response.success) {
      setStatus('success')
      router('/dashboard/summary')
      return
    }
    if ('error' in response) {
      console.log(response.error)
    }
    setStatus('fail')
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
          <Grid gap={24} columns={1}>
            <InputText
              {...fields.name}
              disabled={status() === 'loading'}
              error={status() === 'fail'}
            />
            <InputText
              {...fields.password}
              disabled={status() === 'loading'}
              error={status() === 'fail' ? 'Login failed' : undefined}
            />
          </Grid>
          <Spacer height={40} />
          <Button class={styles.loginBtn} type="submit" disabled={status() === 'loading'}>
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
