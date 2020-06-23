let user = {
  _firstName: 'John'
}

Object.defineProperty(user,'firstName',{
  get: function() { return this._firstName },
  // set: function(value) { this._firstName = value },
  // enumerable: true,
  // configurable: true
})
console.log("firstName is in User:", 'firstName' in user)
console.log("_firstName is in User:", '_firstName' in user)

delete user.firstName
console.log(user.firstName)

delete user._firstName
console.log(user.firstName)