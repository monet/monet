import { idFunction, IMonad, ISetoid } from '@monet/core'

export abstract class Either<E, T> implements IMonad<T>, ISetoid<Either<E, T>> {
  public readonly '@@type': string = 'monet/Either'

  public abstract ap<V>(afn: Either<E, (val: T) => V>): Either<E, V>
  public 'fantasy-land/ap'<V>(afn: Either<E, (val: T) => V>): Either<E, V> {
    return this.ap(afn)
  }

  public abstract chain<V>(fn: (val: T) => Either<E, V>): Either<E, V>
  public 'fantasy-land/chain'<V>(fn: (val: T) => Either<E, V>): Either<E, V> {
    return this.bind(fn)
  }

  public flatMap<V>(fn: (val: T) => Either<E, V>): Either<E, V> {
    return this.chain(fn)
  }

  public bind<V>(fn: (val: T) => Either<E, V>): Either<E, V> {
    return this.chain(fn)
  }

  public abstract map<V>(fn: (val: T) => V): Either<E, V>
  public 'fantasy-land/map'<V>(fn: (val: T) => V): Either<E, V> {
    return this.map(fn)
  }

  public join<V>(): Either<E, V> { // only if T = IMonad<V>
    return (this as any as Either<E, Either<E, V>>).flatMap(idFunction)
  }

  public takeLeft(m: Either<E, T>): Either<E, T> {
    return this.ap(m.map(a => () => a))
  }

  public takeRight(m: Either<E, T>): Either<E, T> {
    return this.ap(m.map(() => b => b))
  }

  public abstract equals(other: Either<E, T>): boolean
  public 'fantasy-land/equals'(other: Either<E, T>): boolean {
    return this.equals(other)
  }

}
