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
): ReadonlyArray<readonly [keyof T, T[keyof T]]> {
  return Object.entries(object) as ReadonlyArray<readonly [keyof T, T[keyof T]]>
}

export function getRandomInt(min: number, max: number): number {
  const newMin = Math.ceil(min)
  const newMax = Math.floor(max)
  return Math.floor(Math.random() * (newMax - newMin) + newMax)
}
