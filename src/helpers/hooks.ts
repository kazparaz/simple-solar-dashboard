import { createState } from 'solid-js'
import type { SetStateFunction, State } from 'solid-js/types/reactive/state'
import type { InputCheckbox } from '../components/InputCheckbox'
import type { InputNumber } from '../components/InputNumber'
import type { InputSelectTypes } from '../components/InputSelect'
import type { InputText } from '../components/InputText'
import { entries, mutableSet } from './utils'

type InputProps = {
  readonly text: Omit<Parameters<typeof InputText>[0], 'type'>
  readonly email: Omit<Parameters<typeof InputText>[0], 'type'>
  readonly password: Omit<Parameters<typeof InputText>[0], 'type'>
  readonly number: Parameters<typeof InputNumber>[0]
  readonly select: InputSelectTypes<string>
  readonly checkbox: Parameters<typeof InputCheckbox>[0]
}

type FormField = {
  readonly [T in keyof InputProps]: { readonly type: T } & InputProps[T]
}[keyof InputProps]

// Some typescript magic
type WithAllFormFields<T extends Record<string, FormField>> = {
  readonly [K in keyof T]: T[K] extends { readonly values: ReadonlyArray<string> }
    ? InputSelectTypes<T[K]['values'][number]> & Omit<T[K], 'values'>
    : InputProps[T[K]['type']] & T[K]
}

/* eslint-disable functional/no-loop-statement,functional/immutable-data,unicorn/no-useless-undefined */
export function useFormFields<T extends Record<string, FormField>>(
  fields: T
): readonly [State<WithAllFormFields<T>>, SetStateFunction<WithAllFormFields<T>>] {
  entries(fields).forEach(([key]) => {
    mutableSet(fields[key], 'name', key.toString())
    mutableSet(fields[key], 'value', undefined) // if field is not set, rerender is triggered
  })

  const [state, setState] = createState(fields)

  entries(fields).forEach(([key]) => {
    setState(key, {
      ...state[key],
      name: key,
      onChange: (value: never): void => setState(key, 'value', value),
      onInput: (value: never): void => setState(key, 'value', value),
    })
  })

  return [state, setState] as never
}
