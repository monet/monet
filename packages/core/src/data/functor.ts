// https://github.com/fantasyland/fantasy-land#functor
export interface IFunctor<T> {
  map<V>(fn: (val: T) => V): IFunctor<V>
  'fantasy-land/map'<V>(fn: (val: T) => V): IFunctor<V>
}
