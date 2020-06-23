// MUTABLE CONST

const util = require('../10-Objects/b-utils.js')

const coordinates = { // CONST
  longitude: 100,
  latitude: 120
}


util.print(coordinates)

// Altering coordinates
coordinates.longitude = 200
coordinates.latitude = 240

// Add property: direction
console.log('\nAdding coordinates.direction')
coordinates.direction = 'S'

util.print(coordinates)

// Deleting some property
delete coordinates.latitude
console.log('\nDeleting coordinates.latitude')
console.log('\n\t',coordinates)

console.log('\nisExtensible:', Object.isExtensible(coordinates))
console.log('isSealed:', Object.isSealed(coordinates))
console.log('isFrozen:', Object.isFrozen(coordinates))
