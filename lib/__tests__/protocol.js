const { str } = require('../protocol')

test('returns string', () => {
  const data = str()
  expect(data).toBe('Test Protocol')
})
