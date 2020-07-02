// Example 01 - Ordinary function

let functOne = function (value) {
  return value + value
}

console.log(functOne(11))

// Example 02 - Ordinary function

function functTwo(value) {
  return value + value
}

console.log(functTwo(12))

// Example 03 - Arrow function

let doubleOne = num => num + num

console.log(doubleOne(13))

// Example 04 - Arrow function return

let doubleTwo = num => {
  return num + num
}

console.log(doubleTwo(14))

// Example 05 - Arrow function multiple parameters

let doubleThree = (numA, numB) => {
  return numA + numB
}

console.log(doubleThree(15,16))

let doubleFour = (numA, numB) => {

}