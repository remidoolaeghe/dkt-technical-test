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

function getNames() {
  // TODO
}

it('should return an array of all names', () => {
  const expected = 'TODO'
  expect(getNames()).toEqual(expected)
})

function getNamesUnder(age) {
  // TODO
}

it('should return an array of names under age', () => {
  // TODO : get names under 12
  // TODO : get names under 8
  // TODO : get names under 1
  // TODO : get names under 0
})

function getDogsMeanAge() {
  // TODO
}

it('should return dog names', () => {
  expect(getDogsMeanAge()).toEqual(9.5)
})