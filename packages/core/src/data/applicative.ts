// https://github.com/fantasyland/fantasy-land#applicative
export interface IApplicative<T> {
  ap<V>(afn: IApplicative<(val: T) => V>): IApplicative<V>
  'fantasy-land/ap'<V>(afn: IApplicative<(val: T) => V>): IApplicative<V>
}
