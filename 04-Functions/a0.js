// Parameters vs Arguments

console.log("Parameters")

function add(numberA, numberB) {
  return numberA + numberB
}

console.log(add(11, 29))

console.log("Arguments")
function print() {
  if(arguments.length <= 1) {
    arguments[0].forEach((element) => {console.log(element)})
  } else {
    console.log(arguments.length)
    for(let i = 0; i < arguments.length; i++) {
      console.log(arguments[i])
    }
  }
}

let arrOne = [1, 2, 4, 8]
print(arrOne)

let fruit = "Orange"
let salad = "Tomato"
let cereal = "Rice"
print(fruit, salad, cereal)