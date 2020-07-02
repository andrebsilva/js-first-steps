String.prototype.display = function () {
  return this
}

String.prototype.displayString = function () {
  return this.toString()
}

console.log('Uva'.display())
console.log('Pêra'.display().toString())
console.log('Maçã'.displayString())