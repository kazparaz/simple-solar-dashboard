export function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw new Error(`Expected value to be defined`)
  }
}

export const ensureTypeExtends = <T>() => <V extends T>(value: V): V => {
  return value
}
