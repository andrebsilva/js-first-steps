function Profile(fName, mName, lName) {
  this.fistName = fName
  this.middleName = mName
  this.lastName = lName
}

Profile.prototype.completeName = function () {
  return `${this.fistName} ${this.middleName} ${this.lastName}`
}

let userOne = new Profile('André', 'Barcelos', 'Silva')
let userTwo = new Profile('Monique Hevellyn', 'de Brito', 'Menezes')
let userThree = new Profile('Júlia', 'Menezes', 'Barcelos')

console.log('Nome completo:', userOne.completeName())
console.log('Nome completo:', userTwo.completeName())
console.log('Nome completo:', userThree.completeName())