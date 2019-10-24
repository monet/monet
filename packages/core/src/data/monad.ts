import { IApplicative } from './applicative'
import { IChain } from './chain'
import { IFunctor } from './functor'

interface IMonad<T> extends IFunctor<T>, IChain<T>, IApplicative<T> {
  readonly ['@@type']: string
  bind<V>(fn: (val: T) => IMonad<V>): IMonad<V>
  flatMap<V>(fn: (val: T) => IMonad<V>): IMonad<V>
  chain<V>(fn: (val: T) => IMonad<V>): IMonad<V>
  map<V>(fn: (val: T) => V): IMonad<V>
  join<V>(): IMonad<V> // only if T = IMonad<V>
  /* These are monet-Monad-specific: */
  takeLeft(m: IMonad<T>): IMonad<T>
  takeRight(m: IMonad<T>): IMonad<T>
}
