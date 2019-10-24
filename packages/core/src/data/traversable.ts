// TypeClass for traversables
export interface ITraversable<T> {
  foldLeft<V>(initial: V): (fn: (acc: V, val: T) => V) => V
  foldRight<V>(initial: V): (fn: (val: T, acc: V) => V) => V
}
