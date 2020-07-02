class Employee {
  constructor(fName, mName, lName, ssn) {
    this._firstName = fName
    this._middleName = mName
    this._lastName = lName
    this._socialSecurityNumber = ssn
  }

  getCompleteName() {
    return `${this._firstName} ${this._middleName} ${this._lastName}`
  }

  getFirstName() {
    return this._firstName
  }

  getMiddleName() {
    return this._middleName
  }

  getLastName() {
    return this._lastName
  }

  getSocialSecurityNumber() {
    return this._socialSecurityNumber
  }

}

let emplOne = new Employee('André', 'Barcelos', 'Silva', '012.345.678-90')

console.log('Complete Name:', emplOne.getCompleteName())
console.log('First Name   :', emplOne.getFirstName())
console.log('Last Name    :', emplOne.getLastName())
console.log('S. S. Number :', emplOne.getSocialSecurityNumber())