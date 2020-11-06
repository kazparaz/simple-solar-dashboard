import { createEffect, createSignal } from 'solid-js'
import { cls } from '../styles/css'

export function Scroller(props: {
  readonly allowScroll?: boolean
  readonly class?: string
  readonly children: JSX.Element
}): JSX.Element {
  // eslint-disable-next-line functional/no-let
  let ref: HTMLDivElement | undefined
  const [hasScrollbar, setHasScrollbar] = createSignal(false)

  createEffect(() => {
    setTimeout(() => {
      setHasScrollbar(!!(ref && ref.clientHeight < ref.scrollHeight))
    }, 1)
  })

  return (
    <div
      ref={ref}
      class={cls(
        props.allowScroll ?? true
          ? { overflow: 'auto', paddingRight: hasScrollbar() ? 10 : undefined }
          : undefined,
        props.class
      )}>
      {props.children}
    </div>
  )
}
