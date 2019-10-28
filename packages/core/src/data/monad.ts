import { IChain } from './chain'

export interface IMonad<T> extends IChain<T> {
  readonly '@@type': string
  bind<V>(fn: (val: T) => IMonad<V>): IMonad<V>
  flatMap<V>(fn: (val: T) => IMonad<V>): IMonad<V>
  join<V>(): IMonad<V> // only if T = IMonad<V>
  /* These are monet-Monad-specific: */
  takeLeft(m: IMonad<T>): IMonad<T>
  takeRight(m: IMonad<T>): IMonad<T>
}
