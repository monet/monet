import { feature, given, scenario, then, when } from '@monet/core/lib/testing'
import { expect } from 'chai'

import { Either, left, Left, right, Right } from './index'

feature`Either`(() => {

  scenario`takeLeft and takeRight`(() => {
    let aLeft: Either<string, string>
    let aRight: Either<string, string>
    let results: Either<string, string>[]

    given`instances of Either`(() => {
      aLeft = left<string, string>('a Left')
      aRight = right<string, string>('a Right')
    })

    when`one side is taken`(() => {
      results = [
        aLeft.takeLeft(aLeft),
        aLeft.takeLeft(aRight),
        aRight.takeLeft(aLeft),
        aRight.map(() => '1').takeLeft(aRight.map(() => '2')),
        aLeft.takeRight(aLeft),
        aLeft.takeRight(aRight),
        aRight.takeRight(aLeft),
        aRight.map(() => '1').takeRight(aRight.map(() => '2')),
      ]
    })

    then`result is proper`(() => {
      expect(results[0]).to.be.instanceOf(Left)
      expect(results[1]).to.be.instanceOf(Left)
      expect(results[2]).to.be.instanceOf(Left)
      expect(results[3]).to.be.instanceOf(Right)
      expect(results[3].equals(right('2'))).to.be.true
      expect(results[4]).to.be.instanceOf(Left)
      expect(results[5]).to.be.instanceOf(Left)
      expect(results[6]).to.be.instanceOf(Left)
      expect(results[7]).to.be.instanceOf(Right)
      expect(results[7].equals(right('1'))).to.be.true
    })

  })
})
