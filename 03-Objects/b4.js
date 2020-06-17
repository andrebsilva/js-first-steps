let func = new Function("parameter", "return 'Parameter: ' + parameter")

console.log(func("Irrulll"))

// -------------------------------

function funct(parameter) {
  return "Parameter: " + parameter
}

console.log(funct("Eitchaaa"))

// ------------------------------- Two or more parameters

let functi = new Function(
  "numberA",
  "numberB",
  "numberC",
  "return numberA + ' + ' + numberB + ' + ' + numberC + ' = ' + (numberA + numberB + numberC)"
)

console.log(functi(5, 8, 2))

// ------------------------------

let functio = function(numberA, numberB) {
  if (numberA == numberB) {
    return numberA + " equal to " + numberB
  } else if (numberA > numberB) {
    return numberA + " greater then " + numberB
  } else {
    return numberA + " less than " + numberB
  }
}

console.log("\n", functio(10, 20))
console.log("\n", functio(15, 15))
console.log("\n", functio(200, 100))