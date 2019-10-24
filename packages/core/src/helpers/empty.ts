import { isNothing } from './is-nothing'

export const isEmpty = (value: any) =>
  isEmptyString(value) || isEmptyArray(value) || isEmptyObject(value)

const isEmptyString = (value: any) => isNothing(value) || value === ''

const isEmptyArray = (value: any) =>
  Array.isArray(value) && value.length === 0

const isEmptyObject = (value: any) =>
  typeof value === 'object' && Object.keys(value).length === 0
