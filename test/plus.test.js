const _ = require('../dist/commadb')
const Commadb = _.default

test('Plus', () => {
  const CommaDB = new Commadb()
  expect(CommaDB.plus(1, 1)).toBe(2)
})