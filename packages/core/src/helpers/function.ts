/* tslint:disable:no-empty */
export const noop = () => {}

export const compose = <G, F, O>(f: (fParam: F) => O, g: (gParam: G) => F) => (x: G) => f(g(x))

export const isFunction = (f: any) =>
  Boolean(f && f.constructor && f.call && f.apply)
