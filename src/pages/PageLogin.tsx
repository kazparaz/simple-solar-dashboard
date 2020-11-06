import { createSignal } from 'solid-js'
import { Button } from '../components/Button'
import { Flex } from '../components/Flex'
import { Grid } from '../components/Grid'
import { InputText } from '../components/InputText'
import { Link } from '../components/Link'
import { Spacer } from '../components/Spacer'
import { api } from '../helpers/api'
import { useFormFields } from '../helpers/hooks'
import Logo from '../images/PVcase-logo.svg'
import { useRouter } from '../routes'
import { br, cls, createStyles, extend, media } from '../styles/css'
import { mixins } from '../styles/mixins'

export function PageLogin(): JSX.Element {
  const styles = createStyles({
    loginWrap: extend(
      {
        display: 'grid',
        justifyItems: 'center',
        width: '100%',
        minHeight: '100%',
      },
      media(
        { minWidth: br.mobileL.minWidth },
        { alignContent: 'center', justifyContent: 'center', backgroundColor: '#262626' }
      ),
      media(br.mobile, {
        gridTemplateRows: 'auto max-content auto max-content',
      })
    ),
    loginBox: extend(
      media({ minWidth: br.mobileL.minWidth }, { ...mixins.modal, width: 364, marginBottom: 40 }),
      media(br.mobile, {
        gridRow: 2,
        padding: 30,
        minWidth: '100%',
      })
    ),
    loginSubText: {
      fontSize: 16,
      fontWeight: 500,
      color: '#C4C4C4',
    },
    footer: extend(
      { fontSize: 16, fontWeight: 500 },
      media({ minWidth: br.mobileL.minWidth }, { color: '#FFFFFF' }),
      media(br.mobile, {
        gridRow: 4,
        padding: '38px 0',
      })
    ),
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
        <div class={cls({ textAlign: 'center' })}>
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

          <Button class={cls({ width: '100%' })} type="submit" disabled={status() === 'loading'}>
            Log in
          </Button>
        </form>
      </div>

      <p class={styles.footer}>
        Don’t have an account?{' '}
        <Link class={styles.footer} underline>
          Sign Up
        </Link>
      </p>

      <Spacer height={38} />
    </div>
  )
}
