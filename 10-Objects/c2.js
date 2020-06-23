let profile = {
  firstName: 'John',
}

let descript = Object.getOwnPropertyDescriptor(profile, "firstName")

console.log('Value: ', descript.value)
console.log('Writable: ', descript.writable)
console.log('Enumerable: ', descript.enumerable)
console.log('Configurable', descript.configurable)
