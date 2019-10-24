import { expect } from 'chai'

import { feature, given } from '../../testing/ghrkn'
import { equals } from '../equals'

feature`Equals helpers`(() => {
  given`Equal values expect result to be true`(() => {
    expect(equals(true)(true)).to.equal(true)
    expect(equals('Equal string')('Equal string')).to.equal(true)
    expect(equals(0)(0)).to.equal(true)
    expect(equals(NaN)(NaN)).to.equal(true)
    expect(equals(10)(10)).to.equal(true)
    expect(equals(null)(null)).to.equal(true)
  })

  given`Not equal values expect result to be false`(() => {
    expect(equals(true)(false)).to.equal(false)
    expect(equals(0)(1)).to.equal(false)
    expect(equals('yes')('no')).to.equal(false)
    expect(equals(false)(true)).to.equal(false)
    expect(equals([])({})).to.equal(false)
    expect(equals({})({})).to.equal(false)
    expect(equals(3)([3])).to.equal(false)
    expect(equals(3)('3')).to.equal(false)
  })
})
