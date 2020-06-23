let obj = {}

Object.defineProperty(obj, 'name',{
  value: 'John'
})


console.log('Name:', obj.name)

console.log('Name is in obj:','name' in obj)
console.log('Name is Enumerable: ', obj.propertyIsEnumerable('name'))

delete obj.name // Fail
console.log('Name:', obj.name)

obj.name = 'Alan' // Fail
console.log('Name:', obj.name)