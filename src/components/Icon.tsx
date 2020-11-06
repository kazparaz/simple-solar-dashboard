import { createEffect } from 'solid-js'
import { assert, ensureType } from '../helpers/utils'
import type { StrictCSSProperties } from '../styles/css'
import { cls, createStyles } from '../styles/css'

const symbols = ensureType<Record<string, (color: string) => JSX.Element>>()({
  x: (color) => (
    <svg width="7" height="8" viewBox="0 0 7 8">
      <path
        fill={color}
        d="M3.49316 3.30371L5.13379 0.603516H6.61035L4.19043 4.26074L6.68555 8H5.22266L3.51367 5.23145L1.80469 8H0.334961L2.83008 4.26074L0.410156 0.603516H1.87305L3.49316 3.30371Z"
      />
    </svg>
  ),
  home: (color) => (
    <svg width="20" height="18" viewBox="0 0 20 18">
      <path
        fill={color}
        d="M10.3813 0.793954C10.1912 0.622817 9.90252 0.622817 9.71237 0.793954L1.06225 8.57908C0.721637 8.88562 0.938486 9.45072 1.39673 9.45072H3.07969V16.9132C3.07969 17.1894 3.30354 17.4132 3.57969 17.4132H8.05626V11.4414H12.0375V17.4132H16.5141C16.7902 17.4132 17.0141 17.1894 17.0141 16.9132V9.45072H18.697C19.1553 9.45072 19.3721 8.88562 19.0315 8.57908L10.3813 0.793954Z"
      />
    </svg>
  ),
  menu: (color) => (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M4.95357 5.98659H19.0464C20.3179 6.02231 20.3179 3.96524 19.0464 4.00095H4.95357C3.68214 3.96516 3.68214 6.02231 4.95357 5.98659Z"
        fill={color}
      />
      <path
        d="M19.0464 11.0075H4.95357C3.68214 10.9718 3.68214 13.0289 4.95357 12.9932H19.0464C20.3179 13.0289 20.3179 10.9718 19.0464 11.0075Z"
        fill={color}
      />
      <path
        d="M19.0464 17.9785H4.95357C3.68214 17.9785 3.68214 19.9999 4.95357 19.9999H19.0464C20.3179 19.9999 20.3179 17.9785 19.0464 17.9785Z"
        fill={color}
      />
    </svg>
  ),
  info: (color) => (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path
        fill={color}
        d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1C11.866 1 15 4.134 15 8C15 11.866 11.866 15 8 15Z"
      />
      <path fill={color} d="M9 6.5C9 5.94772 8.55228 5.5 8 5.5H6.5V6.5H8V12H7V13H10V12H9V6.5Z" />
      <path
        fill={color}
        d="M8 4.5C8.55228 4.5 9 4.05228 9 3.5C9 2.94772 8.55228 2.5 8 2.5C7.44772 2.5 7 2.94772 7 3.5C7 4.05228 7.44772 4.5 8 4.5Z"
      />
    </svg>
  ),
  plus: (color) => (
    <svg width="11" height="10" viewBox="0 0 11 10">
      <path
        fill={color}
        d="M9.99995 4.49998H6.00002V0.499954C6.00002 0.224014 5.77599 -1.52588e-05 5.49995 -1.52588e-05C5.22401 -1.52588e-05 4.99998 0.224014 4.99998 0.499954V4.49998H0.999954C0.724014 4.49998 0.499985 4.72401 0.499985 4.99995C0.499985 5.27599 0.724014 5.50002 0.999954 5.50002H4.99998V9.49995C4.99998 9.77599 5.22401 10 5.49995 10C5.77599 10 6.00002 9.77599 6.00002 9.49995V5.50002H9.99995C10.276 5.50002 10.5 5.27599 10.5 4.99995C10.5 4.72401 10.276 4.49998 9.99995 4.49998Z"
      />
    </svg>
  ),
  check: (color) => (
    <svg width="9" height="8" viewBox="0 0 9 8">
      <path stroke={color} fill="transparent" d="M8 0.5L3.5 7L0.5 4.5" />
    </svg>
  ),
  down: (color) => (
    <svg width="10" height="6" viewBox="0 0 10 6">
      <path d="M9 1L5 5L1 1" fill="transparent" stroke={color} />
    </svg>
  ),
  selectDown: (color) => (
    <svg width="6" height="3" viewBox="0 0 6 3">
      <path d="M3 3L6 0L2.62268e-07 -5.24536e-07L3 3Z" fill={color} />
    </svg>
  ),
  warning: (color) => (
    <svg width="14" height="14" viewBox="0 0 14 14">
      <g clip-path="url(#clip0)">
        <path
          d="M6.99969 9.59364C6.60829 9.59364 6.28021 9.92173 6.28021 10.3131C6.28021 10.7045 6.60829 11.0326 6.99969 11.0326C7.37669 11.0326 7.71916 10.7045 7.7019 10.3304C7.71916 9.91885 7.39396 9.59364 6.99969 9.59364Z"
          fill={color}
        />
        <path
          d="M13.6593 12.1437C14.1111 11.3638 14.114 10.4342 13.6651 9.65718L9.15823 1.85227C8.71216 1.06659 7.90634 0.600372 7.00267 0.600372C6.09901 0.600372 5.29319 1.06947 4.84711 1.84939L0.334541 9.66293C-0.114414 10.4486 -0.111536 11.3839 0.343175 12.1638C0.79213 12.9351 1.59507 13.3985 2.49298 13.3985H11.4951C12.3959 13.3985 13.2046 12.9294 13.6593 12.1437ZM12.6808 11.5796C12.4304 12.0113 11.9872 12.2674 11.4922 12.2674H2.4901C2.00085 12.2674 1.56053 12.0171 1.31591 11.594C1.06841 11.1652 1.06553 10.6529 1.31303 10.2212L5.82561 2.41058C6.07023 1.98177 6.50767 1.72852 7.00267 1.72852C7.4948 1.72852 7.93512 1.98465 8.17974 2.41346L12.6894 10.2241C12.9312 10.6443 12.9283 11.1508 12.6808 11.5796Z"
          fill={color}
        />
        <path
          d="M6.82134 4.54335C6.47887 4.6412 6.2659 4.95202 6.2659 5.32902C6.28317 5.55638 6.29756 5.78661 6.31482 6.01397C6.36375 6.88022 6.41267 7.72921 6.4616 8.59546C6.47887 8.88901 6.70622 9.10197 6.99977 9.10197C7.29332 9.10197 7.52355 8.87462 7.53794 8.57819C7.53794 8.39976 7.53794 8.23572 7.55521 8.05441C7.58686 7.49897 7.6214 6.94353 7.65306 6.3881C7.67032 6.02836 7.70198 5.66862 7.71925 5.30888C7.71925 5.17937 7.70198 5.06426 7.65306 4.94914C7.50628 4.62681 7.16381 4.46277 6.82134 4.54335Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
})

export function Icon(props: {
  readonly class?: string
  readonly symbol: keyof typeof symbols
  readonly size?: number
  readonly color?: StrictCSSProperties['color']
}): JSX.Element {
  const style = createStyles({
    icon: {
      display: 'block',
      $nest: { '> svg': { display: 'block' } },
    },
  })

  const svg = symbols[props.symbol](props.color ?? 'currentColor')
  assert(svg instanceof SVGElement)

  createEffect(() => {
    const attrs = {
      width: Number.parseFloat(svg.getAttribute('width') || ''),
      height: Number.parseFloat(svg.getAttribute('height') || ''),
    }
    const scaleRatio = (props.size ?? attrs.height) / attrs.height
    svg.setAttribute('width', Math.round(attrs.width * scaleRatio).toString())
    svg.setAttribute('height', Math.round(attrs.height * scaleRatio).toString())
  })
  return <span class={cls(style.icon, props.class)}>{svg}</span>
}
