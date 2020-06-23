// MUTABLE CONST [FREEZE]

const util = require('../10-Objects/b-utils.js')

const coordinates = Object.freeze({ // CONST FREEZE
  longitude: 100,
  latitude: 120
})


util.print(coordinates)

// Altering coordinates
coordinates.longitude = 200
coordinates.latitude = 240

// Add property: direction [FAIL]
console.log('\nAdding coordinates.direction [FAIL]')
coordinates.direction = 'N'

util.print(coordinates)

// Deleting some property [FAIL]
delete coordinates.latitude
console.log('\nDeleting coordinates.latitude [FAIL]')
console.log('\n\t',coordinates)

console.log('\nisExtensible:', Object.isExtensible(coordinates))
console.log('isSealed:', Object.isSealed(coordinates))
console.log('isFrozen:', Object.isFrozen(coordinates))
