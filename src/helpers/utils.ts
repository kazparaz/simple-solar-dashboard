export type Tuple<TItem, TLength extends number> = readonly [TItem, ...(readonly TItem[])] & {
  readonly length: TLength
}

export function assert(value: boolean): asserts value {
  if (!value) {
    throw new Error(`Expected value to be rue`)
  }
}

export function assertIsDefined<T>(value: T): asserts value is NonNullable<T> {
  if (value === undefined || value === null) {
    throw new Error(`Expected value to be defined`)
  }
}

// Hacky way to define a wanted type, but get a better type inference
export function ensureType<T>() {
  return <V extends T>(value: V): V => {
    return value
  }
}

export function isKeyOf<T extends string>(
  key: string | undefined,
  object: Record<T, unknown>
): key is T {
  return typeof key === 'string' && key in object
}

export function entries<T extends Record<string, unknown>>(
  object: T
): ReadonlyArray<readonly [Extract<keyof T, string | number>, T[keyof T]]> {
  return Object.entries(object) as never
}

export function mutableSet<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K]
): void {
  // eslint-disable-next-line functional/immutable-data,@typescript-eslint/no-extra-semi
  ;(obj as Record<K, unknown>)[key] = value
}

export function ensureArray<T>(value: T | readonly T[]): readonly T[] {
  return (Array.isArray(value) ? value : [value]) as never
}

export function getRandomInt(min: number, max: number): number {
  const newMin = Math.ceil(min)
  const newMax = Math.floor(max)
  return Math.floor(Math.random() * (newMax - newMin) + newMax)
}
