import { cls, createStyles } from '../styles/css'
import { Flex } from './Flex'
import { Icon } from './Icon'
import { Spacer } from './Spacer'

export function Alert(props: {
  readonly theme: 'info'
  readonly children: JSX.Element
}): JSX.Element {
  const styles = createStyles({
    alert: {
      padding: 16,
      fontSize: 14,
      borderRadius: 4,

      $nest: {
        ['&.theme-info']: {
          backgroundColor: '#EDF4F7',
          color: '#1C5C7B',
        },
      },
    },
  })
  return (
    <aside class={cls(styles.alert, `theme-${props.theme}`)}>
      <Flex justifyContent="center">
        <Icon symbol="info" />
        <Spacer width={14} />
        {props.children}
      </Flex>
    </aside>
  )
}
