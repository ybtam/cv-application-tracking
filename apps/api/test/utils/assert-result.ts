export function assertSingleValue<TValue extends object>(
  value: AsyncIterable<TValue> | TValue
): asserts value is TValue {
  if (Symbol.asyncIterator in value) {
    throw new Error('Expected single value')
  }
}
