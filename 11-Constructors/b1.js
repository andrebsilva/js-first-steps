let obj = {}

let prototype = Object.getPrototypeOf(obj)

console.log('prototype equal Object.prototype?', prototype === Object.prototype) // true
console.log('obj is Prototype of Object.prototype?', Object.prototype.isPrototypeOf(obj)) // true