it('should test falsy value', () => {
  const actual = 'TODO'
  expect(actual).toBeFalsy()
})

it('should concatenate string and number', () => {
  const actual = "10" + 10
  const expected = 'TODO'
  expect(actual).toEqual(expected)
})
