// VAR vs LET

console.log("\nNot defined")
for(h = 0; h < 5; h++) {
  console.log(h) // 0 to 4
}
console.log("h: ", h) // 5 (not defined)

console.log("\nVAR")
for(var i = 0; i < 5; i++) {
  console.log(i) // 0 to 4
}
console.log("i: ", i) // 5 (var)

console.log("\nLET")
for(let j = 0; j < 5; j++) {
  console.log(j) // 0 to 4
}
console.log("j: ", j) // j is not defined (let)

// ---------------------------------------------------------------

console.log("\UNested Block")
for(let k = 0; k < 5; k++) {
  if(k === k) {
    console.log(k)
    let m = 10
  }
  console.log(m) // m is not defined
}
