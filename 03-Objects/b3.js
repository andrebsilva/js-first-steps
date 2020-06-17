let array = new Array("John", "Doe", 19)

console.log("\nTraditional Array\n")
for(let i = 0; i < array.length; i++) {
  console.log(array[i])
}

// -----------------------------------

let arrays = ["John", "Doe"]
arrays.push(18)

console.log("\nModern Array\n")

arrays.forEach(element => console.log(element))

arrays.forEach((element) => {console.log(element)})
