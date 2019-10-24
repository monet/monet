import { areSetoidsEqual } from './setoid'

const areSimplyEqual = (a: any, b: any) => a === b || (a !== a && b !== b)

export const equals = (a: unknown) => (b: unknown) => {
  if (areSimplyEqual(a, b)) {
    return true
  }
  if (!a || !b) {
    return false
  }
  return areSetoidsEqual(a, b)
}
