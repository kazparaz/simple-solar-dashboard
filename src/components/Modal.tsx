import { Show } from 'solid-js'
import { Portal } from 'solid-js/dom'
import type { appContainerSelector } from '..'
import { useBodyScrollPrevention } from '../helpers/hooks'
import { assertIsDefined } from '../helpers/utils'
import { createStyles, extend, media } from '../styles/css'
import { br, mixins } from '../styles/mixins'
import { Flex } from './Flex'

export function Modal(props: {
  readonly children: JSX.Element
  readonly visible: boolean
}): JSX.Element {
  const targetSelector: typeof appContainerSelector = '#app'
  const portalTarget = document.querySelector(targetSelector)

  assertIsDefined(portalTarget)

  const styles = createStyles({
    modalWrap: extend(
      {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 69,
        overflowY: 'scroll',
      },
      media({ maxWidth: br.tablet.maxWidth }, { top: 56, display: 'block' })
    ),
    modal: extend(
      {
        ...mixins.modal,
        width: 702,
        height: 560,
      },
      media({ maxWidth: br.tablet.maxWidth }, { width: '100%', height: '100%', borderRadius: 0 })
    ),
  })

  useBodyScrollPrevention(() => props.visible)

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
