import { expect } from 'chai'

import { feature, given, scenario, then, when } from '../testing'
import { equals } from './equals'

feature`equals`(() => {

  scenario`testing equal values`(() => {
    let equalPairs: [any, any][]
    let results: boolean[]

    given`a set of pairs of equal values`(() => {
      const o = {}
      const a = []
      equalPairs = [
        [true, true],
        ['Equal string', 'Equal string'],
        [0, 0],
        [10, 10],
        [NaN, NaN],
        [null, null],
        [undefined, undefined],
        [o, o],
        [a, a],
      ]
    })

    when`values from a pair are matched` (() => {
      results = equalPairs.map(([a, b]) => equals(a)(b))
    })

    then`they pass the test`(() => {
      expect(results).to.deep.equal([true, true, true, true, true, true, true, true, true])
    })

  })

  scenario`testing not equal values`(() => {
    let notEqualPairs: [any, any][]
    let results: boolean[]

    given`a set of pairs of equal values`(() => {
      notEqualPairs = [
        [true, false],
        ['yes', 'no'],
        [0, 1],
        [3, '3'],
        [3, [3]],
        [NaN, 0],
        [NaN, ''],
        [null, undefined],
        [{}, {}],
        [[], []],
        [[], {}],
      ]
    })

    when`values from a pair are matched` (() => {
      results = notEqualPairs.map(([a, b]) => equals(a)(b))
    })

    then`they do not pass the test`(() => {
      expect(results).to.deep.equal(
        [false, false, false, false, false, false, false, false, false, false, false])
    })

  })

})
