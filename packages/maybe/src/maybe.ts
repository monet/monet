import { ICatamorphism, ISetoid, ITraversable } from '@monet/core'

export interface IMaybe<T extends NonNullable<{}>>
  extends ISetoid<IMaybe<T>>,
    ITraversable<T>,
    ICatamorphism<undefined, T>,
    Iterable<T> {
  /* Inherited from Monad: */
  readonly bind: <V extends NonNullable<{}>>(
    fn: (val: T) => IMaybe<V>,
  ) => IMaybe<V>
  readonly flatMap: <V extends NonNullable<{}>>(
    fn: (val: T) => IMaybe<V>,
  ) => IMaybe<V>
  readonly chain: <V extends NonNullable<{}>>(
    fn: (val: T) => IMaybe<V>,
  ) => IMaybe<V>
  readonly map: <V extends NonNullable<{}>>(fn: (val: T) => V) => IMaybe<V>
  readonly join: <V>() => T extends IMaybe<V> ? V : never
  readonly takeLeft: (m: IMaybe<T>) => IMaybe<T>
  readonly takeRight: (m: IMaybe<T>) => IMaybe<T>

  /* Inherited from Applicative */
  readonly ap: <V extends NonNullable<{}>>(
    maybeFn: IMaybe<(val: T) => V>,
  ) => IMaybe<V>

  /* IMaybe specific */
  readonly cata: <Z>(none: () => Z, some: (val: T) => Z) => Z
  readonly fold: <V>(val: V) => (fn: (val: T) => V) => V
  readonly catchMap: (fn: () => IMaybe<T>) => IMaybe<T>

  readonly filter: (fn: (val: T) => boolean) => IMaybe<T>
  readonly filterNot: (fn: (val: T) => boolean) => IMaybe<T>

  readonly isSome: () => boolean
  readonly isJust: () => boolean
  readonly isNone: () => boolean
  readonly isNothing: () => boolean
  readonly some: () => T
  readonly just: () => T
  readonly orSome: (val: T) => T
  readonly orJust: (val: T) => T
  readonly getOrElse: (val: T) => T
  readonly orLazy: (fn: () => T | null | undefined) => T
  readonly orNull: () => T | null
  readonly orUndefined: () => T | undefined
  readonly orElse: (IMaybe: IMaybe<T>) => IMaybe<T>
  readonly orNoneIf: (val: boolean) => IMaybe<T>
  readonly orNothingIf: (val: boolean) => IMaybe<T>
  readonly contains: (val: T) => boolean
  readonly every: (fn: (e: T) => boolean) => boolean
  readonly forall: (fn: (e: T) => boolean) => boolean
  readonly exists: (fn: (e: T) => boolean) => boolean
  readonly forEach: (fn: (val: T) => void) => void
  readonly orElseRun: (fn: () => void) => void

  readonly toArray: () => Array<T>
  readonly toSet: () => Set<T>
  //   readonly toList:()=> List<T>;
  //   readonly toEither:<E>(left?: E)=> Either<E, T>;
  //   readonly toValidation:<E>(fail?: E)=> Validation<E, T>;
  readonly to: <I extends Iterable<T>>(ctor: (iter: Iterable<T>) => I) => I
}
