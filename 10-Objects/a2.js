let arrPropAndMeth = {
  properties: ['constructor', 'length', 'prototype'],
  methods: ['concat', 'copyWithin', 'entries', 'every', 'fill', 'filter', 'find', 'findIndex', 'forEach', 'from', 'includes', 'indexOf', 'isArray', 'join', 'keys', 'lastIndexOf', 'map', 'pop', 'push', 'reduce', 'reduceRight', 'reverse', 'shift', 'slice', 'some', 'sort', 'splice', 'toString', 'unshift', 'valueOf']
}

let arr = []

console.log("\nArray Properties:")
for(let i = 0; i < arrPropAndMeth.properties.length; i++) {
  console.log(arrPropAndMeth.properties[i], "in arr? " ,arrPropAndMeth.properties[i] in arr)
}

console.log("\nArray Methods:")
for(let i = 0; i < arrPropAndMeth.methods.length; i++) {
  console.log(arrPropAndMeth.methods[i], "in arr? " ,arrPropAndMeth.methods[i] in arr)
}

console.log("\nArray.isArray(arr)?", Array.isArray(arr))
console.log(Array.from("MARIA"))
console.log("MARIA"[2])