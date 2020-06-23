const util = require('./b-utils.js')

const obj = {
  propertyOne: 11
}

util.print(obj)

obj.propertyTwo = 22
obj.propertyThree = 33

util.print(obj)

delete obj.propertyOne

util.print(obj)

Object.defineProperty(obj, 'propertyTwo', {configurable: false})

delete obj.propertyTwo // Cannot delete, because configurable is false


util.print(obj)
