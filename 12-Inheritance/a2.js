function Doctor(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

Doctor.prototype.treat = function() {
  return 'Treated'
}

Doctor.prototype.display = function() {
  return `Dr ${this.firstName} ${this.lastName}`
}

// ----------------------------------------------------------------

function Surgeon(firstName, lastName,type) {
  Doctor.call(this, firstName, lastName)
  this.type = type
}

Surgeon.prototype = Object.create(
  Doctor.prototype, {
    constructor: {
      value: Surgeon,
      enumerable: true,
      configurable: true,
      writable: true
    }
  }
)

Surgeon.prototype.treat = function () {
  // return 'Operated'
  return Doctor.prototype.treat.call(this) + ' Operated'
}

Surgeon.prototype.display = function() {
  return `Surgeon Dr ${this.firstName} ${this.lastName} - ${this.type}`
}

let dr = new Doctor('André', 'Barcelos')
let drSurgeon = new Surgeon('Júlia', 'Barcelos', 'Oftalmologista')

console.log(dr.treat())
console.log(dr.display())

console.log(drSurgeon.treat())
console.log(drSurgeon.display())