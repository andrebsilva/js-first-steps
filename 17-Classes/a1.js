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

class Manager extends Employee {
  constructor(fName, mName, lName, ssn, department) {
    super(fName, mName, lName, ssn)
    this._department = department
  }
  getCompleteName() {
    return `${this._firstName} ${this._lastName}`
  }
  getDepartment() {
    return this._department
  }
}

let managOne = new Manager('André', 'Barcelos', 'Silva', '012.345.678-90', 'Network')

console.log('Complete Name:', managOne.getCompleteName())
console.log('First Name   :', managOne.getFirstName())
console.log('Last Name    :', managOne.getLastName())
console.log('Department   :', managOne.getDepartment())
console.log('S. S. Number :', managOne.getSocialSecurityNumber())