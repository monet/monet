import { equals } from '@monet/core'

import { Either } from './either'

export class Left<E, V> extends Either<E, V> {

  public static of<E, V>(error: E): Either<E, V> {
    return new Left<E, V>(error)
  }

  private constructor(private readonly error: E) {
    super()
  }

  public ap<T>(_afn: Either<E, (val: V) => T>): Either<E, T> {
    return this as unknown as Either<E, T>
  }

  public chain<T>(fn: (_val: V) => Either<E, T>): Either<E, T> {
    return this as unknown as Either<E, T>
  }

  public map<T>(_fn: (val: V) => T) {
    return this as unknown as Either<E, T>
  }

  public equals(other: Either<E, V>): boolean {
    return other instanceof Left && equals(this.error)(other.error)
  }

}

export const left = Left.of
