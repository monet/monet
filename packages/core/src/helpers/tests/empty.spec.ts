import { expect } from 'chai'

import { feature, given } from '../../testing/ghrkn'
import { isEmpty } from '../empty'

feature`Empty helpers`(() => {
  given`Non empty values expect value to be false`(() => {
    [
      true,
      false,
      ['I\'m not empty sir!'],
      { hello: 'there' },
      3,
      'Im just empty string... UPS',
      NaN,
    ].forEach(empty => expect(isEmpty(empty)).to.be.false)
  })
  given`Non empty expect value to be true`(() => {
    [null, undefined, [], {}, ''].forEach(
      empty => expect(isEmpty(empty)).to.be.true,
    )
  })
})
