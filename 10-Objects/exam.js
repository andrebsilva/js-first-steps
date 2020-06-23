let License = {}

Object.defineProperties(
  License, {
    name: {
      enumerable: false,
      configurable: true,
      writable: true // Allow alter property
    },
    number: {
      enumerable: true,
      configurable: false,
      writable: true // Allow alter property
    }
  }
)

License.name = 'John'
License.number = 2222

console.log(License.name)
console.log(License.number)

Object.seal(License)

console.log('License is sealed:',Object.isSealed(License))


