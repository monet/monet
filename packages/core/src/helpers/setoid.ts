import { ISetoid } from '../data'

import { isFunction } from './function'

export const isSetoid = <T>(a: any): a is ISetoid<T> => isFunction(a.equals)

export const areSetoidsEqual = (a: any, b: any) =>
  isSetoid(a) && isSetoid(b) && a.equals(b)
