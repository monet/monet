export interface ITraversable<T> {
  readonly foldLeft: <V>(initial: V) => (fn: (acc: V, val: T) => V) => V
  readonly foldRight: <V>(initial: V) => (fn: (val: T, acc: V) => V) => V
}

/* Typeclass for catamorphism */
export interface ICatamorphism<F, T> {
  readonly cata: <C>(l: (e?: F) => C, r: (v: T) => C) => C
}

// https://github.com/fantasyland/fantasy-land#setoid
export interface ISetoid<A> {
  readonly equals: (other: A) => boolean
  readonly 'fantasy-land/equals': (other: A) => boolean
}

/* IApplicative allows applying wrapped functions to wrapped elements */
// https://github.com/fantasyland/fantasy-land#applicative
export interface IApplicative<T> {
  readonly ap: <V>(afn: IApplicative<(val: T) => V>) => IApplicative<V>
  readonly 'fantasy-land/ap': <V>(afn: IApplicative<(val: T) => V>) => IApplicative<V>
}

// https://github.com/fantasyland/fantasy-land#chain
export interface IChain<T> {
  readonly chain: <V>(fn: (val: T) => IChain<V>) => IChain<V>
  readonly 'fantasy-land/chain': <V>(fn: (val: T) => IChain<V>) => IChain<V>
}

/* The (covariant) functor typeclass */
// https://github.com/fantasyland/fantasy-land#functor
export interface IFunctor<T> {
  readonly map: <V>(fn: (val: T) => V) => IFunctor<V>
  readonly 'fantasy-land/map': <V>(fn: (val: T) => V) => IFunctor<V>
}

/* Typeclass for binding, the core monadic transformation */
export interface IBind<T> extends IChain<T> {
  readonly bind: <V>(fn: (val: T) => IBind<V>) => IBind<V> // alias of chain
  readonly chain: <V>(fn: (val: T) => IBind<V>) => IBind<V>
  readonly flatMap: <V>(fn: (val: T) => IBind<V>) => IBind<V> // alias of chain
  readonly join: <V>() => IBind<V> // works only if T = IBind<V>
}

export interface IMonad<T> extends IFunctor<T>, IBind<T>, IApplicative<T> {
  /* These all are defined in IFunctor, IBind and IApplicative: */
  readonly flatMap: <V>(fn: (val: T) => IMonad<V>) => IMonad<V>
  readonly bind: <V>(fn: (val: T) => IMonad<V>) => IMonad<V>
  readonly chain: <V>(fn: (val: T) => IMonad<V>) => IMonad<V>
  readonly map: <V>(fn: (val: T) => V) => IMonad<V>
  readonly join: <V>() => IMonad<V> // only if T = IMonad<V>
  readonly ['@@type']: string

  /* These are monet-Monad-specific: */
  readonly takeLeft: (m: IMonad<T>) => IMonad<T>
  readonly takeRight: (m: IMonad<T>) => IMonad<T>
}
