function Profile(fName, mName, lName) {
  this.fistName = fName
  this.middleName = mName
  this.lastName = lName
}

Profile.prototype = {
  constructor: Profile, // Setup Profile constructor
  completeName: function () {
    return `${this.fistName} ${this.middleName} ${this.lastName}`
  }
}

let userOne = new Profile('André', 'Barcelos', 'Silva')
let userTwo = new Profile('Monique Hevellyn', 'de Brito', 'Menezes')
let userThree = new Profile('Júlia', 'Menezes', 'Barcelos')

console.log('Nome Completo:', userOne.completeName())
console.log('Nome Completo:', userTwo.completeName())
console.log('Nome Completo:', userThree.completeName())

console.log('\nIs userOne instance of Profile?', userOne instanceof Profile) // true
console.log('Is userTwo constructor of Profile?', userTwo.constructor === Profile) // false => true
console.log('Is userThree constructor of Object?', userThree.constructor === Object) // true => false