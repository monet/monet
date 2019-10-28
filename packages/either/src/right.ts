import { equals } from '@monet/core'

import { Either } from './either'

export class Right<E, V> extends Either<E, V> {

  public static of<E, V>(value: V): Either<E, V> {
    return new Right<E, V>(value)
  }

  private constructor(private readonly value: V) {
    super()
  }

  public ap<T>(afn: Either<E, (val: V) => T>): Either<E, T> {
    return afn.map(fn => fn(this.value))
  }

  public chain<T>(fn: (val: V) => Either<E, T>): Either<E, T> {
    return fn(this.value)
  }

  public map<T>(fn: (val: V) => T): Either<E, T> {
    return Right.of(fn(this.value))
  }

  public equals(other: Either<E, V>): boolean {
    return other instanceof Right && equals(this.value)(other.value)
  }

}

export const right = Right.of
