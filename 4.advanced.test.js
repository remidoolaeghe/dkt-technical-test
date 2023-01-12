const data = [
  {
    name: 'Bob',
    friends: [
      {
        name: 'Alice',
        age: 27
      },
      {
        name: 'Joshua',
        age: 34
      }
    ]
  },
  {
    name: 'Joséphine',
    friends: [
      {
        name: 'Alice',
        age: 27
      },
      {
        name: 'Gerhart',
        age: 65
      }
    ]
  },
  {
    name: 'Jean-Paul',
    friends: [
      {
        name: 'Joshua',
        age: 12
      },
      {
        name: 'himself',
        age: 13
      }
    ]
  },
  {
    name: 'Vladimir',
    friends: []
  }
]

function getAliceFriendNames () {
  // TODO
}

it('should return Alice friend names', () => {
  const expected = 'TODO'
  expect(getAliceFriendNames()).toBe(expected)
})

function getBobFriendsMeanAge() {
  // TODO
}

it('should compute Bob friends min age', () => {
  const expected = 'TODO'
  expect(getBobFriendsMeanAge()).toEqual(expected)
})