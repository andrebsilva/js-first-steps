let User = {
  name: null,
  getName: function() {
    return `Name: ${this.name}`
  },
  setName: function(name) {
    this.name = name
  }
}

let userOne = Object.create(
  User, { // Inheritance
    // name: {
    //   value: 'Alex',
    //   writable: true,
    //   enumerable: true,
    //   configurable: true
    // }
    lastName: {
      value: 'Cage'
    },
  }
)



console.log(User.name)
console.log(User.getName())

userOne.setName('Alex')

console.log(userOne.getName(), userOne.lastName)

