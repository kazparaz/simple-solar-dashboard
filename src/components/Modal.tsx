import { createEffect, Show } from 'solid-js'
import { Portal } from 'solid-js/dom'
import type { appContainerSelector } from '..'
import { assertIsDefined } from '../helpers/utils'
import { createStyles } from '../styles/css'
import { mixins } from '../styles/mixins'
import { Flex } from './Flex'

export function Modal(props: {
  readonly children: JSX.Element
  readonly visible: boolean
}): JSX.Element {
  const targetSelector: typeof appContainerSelector = '#app'
  const portalTarget = document.querySelector(targetSelector)

  assertIsDefined(portalTarget)

  const styles = createStyles({
    modalWrap: {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 69,
      overflowY: 'scroll',
    },
    modal: {
      ...mixins.modal,
      width: 702,
      height: 560,
    },
  })

  createEffect(() => {
    // eslint-disable-next-line functional/immutable-data
    document.body.style.overflow = props.visible ? 'hidden' : 'auto'
  })

  return (
    <Show when={props.visible}>
      <Portal mount={portalTarget}>
        <Flex class={styles.modalWrap} justifyContent="center" alignItems="center">
          <aside class={styles.modal}>{props.children}</aside>
        </Flex>
      </Portal>
    </Show>
  )
}
