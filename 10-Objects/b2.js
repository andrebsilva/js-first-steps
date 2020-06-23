const arr = []

arr[0] = 10
arr[1] = 20
arr[2] = 30

function print() {
  console.log("")
  for (let i = 0; i < arr.length; i++) {
  console.log('arr['+i+'] = [' + arr[i] + ']  - is Enumerable:', arr.propertyIsEnumerable(i))
}}

console.log('Array: ')
console.log(arr)

// arr.forEach((element) => {console.log(element)})

print()

Object.defineProperty(arr, 0, {enumerable: false})
delete arr[1]

print()
