// https://github.com/fantasyland/fantasy-land#setoid
export interface ISetoid<A> {
  equals(other: A): boolean
  'fantasy-land/equals'(other: A): boolean
}
