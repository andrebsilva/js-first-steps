let objPropAndMeth = {
  properties: ['constructor', '__proto__', '__noSuchMethod__'],
  instanceMethods: ['__defineGetter__', '__defineSetter__', '__lookupGetter__', '__lookupSetter__', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf', 'unWatch', 'watch'],
  staticMethods: ['assign', 'create', 'defineProperty', 'defineProperties', 'entries', 'freeze', 'fromEntries', 'getOwnPropertyDescriptor', 'getOwnPropertyDescriptors', 'getOwnPropertyNames', 'getOwnPropertySymbols', 'getPrototypeOf', 'is', 'isExtensible', 'isFrozen', 'isSealed', 'keys', 'preventExtensions', 'seal', 'serPrototypeOf', 'values']
}

let obj = {}

console.log("\nObject Properties:")
for(let i = 0; i < objPropAndMeth.properties.length; i++) {
  console.log(objPropAndMeth.properties[i], "in obj? " , objPropAndMeth.properties[i] in obj)
}
console.log("\nObject Instance Methods:")
for(let i = 0; i < objPropAndMeth.instanceMethods.length; i++) {
  console.log(objPropAndMeth.instanceMethods[i] + "()", "in obj? " , objPropAndMeth.instanceMethods[i] in obj)
}

console.log("\nObject Static Methods:")
for(let i = 0; i < objPropAndMeth.staticMethods.length; i++) {
  console.log(objPropAndMeth.staticMethods[i] + "()", "in obj? " , objPropAndMeth.staticMethods[i] in obj)
}