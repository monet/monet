// https://github.com/fantasyland/fantasy-land#chain
export interface IChain<T> {
  chain<V>(fn: (val: T) => IChain<V>): IChain<V>
  'fantasy-land/chain'<V>(fn: (val: T) => IChain<V>): IChain<V>
}
