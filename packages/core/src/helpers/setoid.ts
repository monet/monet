import { isFunction } from './function'

// https://github.com/fantasyland/fantasy-land#setoid
export interface ISetoid<A> {
  readonly equals: (other: A) => boolean
  readonly 'fantasy-land/equals': (other: A) => boolean
}

export const isSetoid = <T>(a: any): a is ISetoid<T> => isFunction(a.equals)

export const areSetoidsEqual = (a: any, b: any) =>
  isSetoid(a) && isSetoid(b) && a.equals(b)
