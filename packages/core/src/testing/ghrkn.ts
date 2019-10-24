import { SuiteFunction, TestFunction } from 'mocha'

const ghrk = (mochaFn: TestFunction | SuiteFunction, label: string) =>
  (txt: TemplateStringsArray) => (h: () => void = () => { /* */ }) => {
    mochaFn(`${label}: ${txt}`, h)
  }

export const feature = ghrk(describe, 'Feature')
export const scenario = ghrk(describe, 'Scenario')
export const given = ghrk(it, 'Given')
export const when = ghrk(it, 'When')
export const and = ghrk(it, '  and')
export const then = ghrk(it, 'Then')

