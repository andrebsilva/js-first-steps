const util = require('./b-utils.js')

const obj = {
  propertyOne: 1,
  propertyTwo: 22,
  propertyThree: 333
}

util.print(obj)

console.log('\nTrying to delete property Three:', 'Sucsess')
delete obj.propertyThree

util.print(obj)

console.log('\nTrying to sealing Object:', 'Sucsess')
Object.freeze(obj)


console.log('\nTrying to delete property Two: ', 'FAIL - Object is already sealed')
delete obj.propertyTwo

util.print(obj)


console.log('\nTrying to insert new property "Four": ', 'FAIL - Object is already sealed')
obj.propertyFour = 4444

util.print(obj)
