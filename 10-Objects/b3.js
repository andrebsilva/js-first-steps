function printObjConsole() {
  console.log()
  let allProperties = Object.keys(this)
  for(let i in allProperties){
    if(typeof this[allProperties[i]] == 'object') {
      console.log(allProperties[i] + '.')
      printObjConsole.call(this[allProperties[i]],allProperties[i]) // Recursive call: Two arguments
    } else {
      console.log((arguments[0]?'\t':'') + allProperties[i] + ":", this[allProperties[i]])
    }
  }
}

const obj = {}

obj.propertyOne = 11
obj.propertyTwo = 22
obj.propertythree = 33

console.log('\nObject:')
console.log(obj)

console.log('obj.propertyOne is enumerable?' ,obj.propertyIsEnumerable('propertyOne'))
printObjConsole.call(obj)

Object.defineProperty(obj, 'propertyOne', {enumerable: false})

console.log('obj.propertyOne is enumerable?' ,obj.propertyIsEnumerable('propertyOne'))
printObjConsole.call(obj)

console.log('obj.propertyOne:' ,obj.propertyOne)