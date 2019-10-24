import { expect } from 'chai'

import { and, feature, given, scenario, then, when } from './ghrkn'

feature `Gherkin style helpers` (() => {

  scenario `Testing testing utils` (() => {

    given `all testing helpers` (() => {

      expect(and).to.not.be.undefined // tslint:disable-line:no-unused-expression

    })

    when `tests are run` (() => {

      expect(and).to.be.instanceOf(Function)

    })

    then `everything is tested` (() => {

      expect(1).to.equal(1)

    })

  })

})
