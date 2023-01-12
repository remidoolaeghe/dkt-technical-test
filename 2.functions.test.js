describe('Sums', () => {


  function fillArrayFromTo (start, end) {
    return Array(end - start + 1).fill(null).map((item, i) => start + i)
  }

  function sumNumbers (first, last) {
    // TODO
  }

  it('should compute the sum from 1 to 10', () => {
    const expected = 'TODO'
    expect(sumNumbers(1, 10)).toEqual(expected)
  })

  it('should compute the sum from 10 to 20', () => {
    const expected = 'TODO'
    expect(sumNumbers(10, 20)).toEqual(expected)
  })

  it('should compute the sum from 1 to 1', () => {
    const expected = 'TODO'
    expect(sumNumbers(1, 1)).toEqual(expected)
  })

  it('should compute the sum from 10 to 1', () => {
    const expected = 'TODO'
    expect(sumNumbers(10, 1)).toEqual(expected)
  })
})


describe('fizzbuzz', () => {
  function fizzBuzz (param) {
    // TODO
  }

  it('should return an empty result for 1', () => {
    const expected = 'TODO'
    expect(fizzBuzz(1)).toEqual('')
  })

  it('should return fizz for 3', () => {
    const expected = 'TODO'
    expect(fizzBuzz(3)).toEqual('')
  })

  it('should return buzz for 5', () => {
    const expected = 'TODO'
    expect(fizzBuzz(1)).toEqual('')
  })

  it('should return fizzbuzz for 15', () => {
    const expected = 'TODO'
    expect(fizzBuzz(15)).toEqual('')
  })
})
