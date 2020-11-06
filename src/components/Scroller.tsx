import { createEffect, createSignal, onMount } from 'solid-js'
import { cls, createStyle, StrictCSSProperties } from '../styles/css'

const customScrollbar = createStyle({
  $nest: {
    // '&::-webkit-scrollbar': {
    //   '-webkit-appearance': 'none',
    // },
    // '&::-webkit-scrollbar:vertical': {
    //   width: 6,
    // },
    // '&::-webkit-scrollbar:horizontal': {
    //   height: 6,
    // },
    // '&::-webkit-scrollbar-thumb': {
    //   backgroundColor: '#C4C4C4',
    //   borderRadius: 6,
    //   borderWidth: 0,
    // },
    // '&::-webkit-scrollbar-thumb:hover': {
    //   backgroundColor: '#BABABA',
    // },
    // '&::-webkit-scrollbar-track': {
    //   borderRadius: 10,
    //   backgroundColor: '#EDEDED',
    // },
  },
})

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
          ? {
              overflow: 'auto',
              paddingRight: hasScrollbar() ? 10 : undefined,
            }
          : undefined,
        customScrollbar,
        props.class
      )}>
      {props.children}
    </div>
  )
}
