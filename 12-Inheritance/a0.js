let user = {
  name: 'John',
  display: function() {
    return `Name: ${this.name}`
  }
}

let userOne = Object.create(
  Object.prototype, {
    name: {
      value: 'Alex',
      writable: true,
      enumerable: true,
      configurable: true
    }
  }
)

console.log(user.name)
console.log(user.display())

console.log(userOne.name)
