import { expect } from 'chai'

import { feature, given, scenario, then, when } from '../testing'

import { isEmpty } from './empty'

feature`isEmpty`(() => {

  scenario`Testing not empty values`(() => {
    let notEmptyValues: any[]
    let testResults: boolean[]

    given`some not empty values`(() => {
      notEmptyValues = [
        true,
        false,
        ['I am not empty sir!'],
        { hello: 'there' },
        3,
        'Im just empty string... UPS',
        NaN,
      ]
    })

    when`they are tested with "isEmpty"`(() => {
      testResults = notEmptyValues.map(isEmpty)
    })

    then`none pass the test`(() => {
      expect(testResults).to.deep.equal([false, false, false, false, false, false, false])
    })

  })

  scenario`Testing empty values`(() => {
    let emptyValues: any[]
    let testResults: boolean[]

    given`some empty values`(() => {
      emptyValues = [null, undefined, [], {}, '']
    })

    when`they are tested with "isEmpty"`(() => {
      testResults = emptyValues.map(isEmpty)
    })

    then`all pass the test`(() => {
      expect(testResults).to.deep.equal([true, true, true, true, true])
    })

  })

})
