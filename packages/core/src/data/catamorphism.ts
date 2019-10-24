// TypeClass for catamorphism
export interface ICatamorphism<F, T> {
  cata<C>(l: (e?: F) => C, r: (v: T) => C): C
}
