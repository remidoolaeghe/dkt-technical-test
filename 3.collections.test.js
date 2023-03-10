const data = [
  {
    name: 'Tobby',
    age: 12,
    species: 'dog'
  },
  {
    name: 'Rex',
    age: 7,
    species: 'dog'
  },
  {
    name: 'Felix',
    age: 1,
    species: 'cat'
  }
]


describe('Names', () => {
  function getNames () {
    // TODO
  }

  it('should return an array of all names', () => {
    const expected = 'TODO'
    expect(getNames()).toEqual(expected)
  })
})

describe('Names under', () => {
  function getNamesUnder (age) {
    // TODO
  }

  it('should return Tobby, Rex and Felix under age 12', () => {
    const expected = 'TODO'
    expect(getNamesUnder(12)).toEqual(expected)
  })

  it('should return Rex and Felix under age 8', () => {
    const expected = 'TODO'
    expect(getNamesUnder(8)).toEqual(expected)
  })

  it('should return Tobby, Rex and Felix under age 7', () => {
    const expected = 'TODO'
    expect(getNamesUnder(7)).toEqual(expected)
  })

  it('should return Felix under age 1', () => {
    const expected = 'TODO'
    expect(getNamesUnder(1)).toEqual(expected)
  })

  it('should return an empty array under age 0', () => {
    const expected = 'TODO'
    expect(getNamesUnder(0)).toEqual(expected)
  })
})

describe('Mean age', () => {
  function getDogsMeanAge () {
    // TODO
  }

  it('should return dog names', () => {
    const expected = 'TODO'
    expect(getDogsMeanAge()).toEqual(expected)
  })
})
