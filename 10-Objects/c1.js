const util = require('./b-utils.js')

let user = {}

Object.defineProperties(
  user, {
    _firstName: {
      enumerable: true,
      configurable: true,
      writable: true // Allow alter property
    },
    firstName: {
      get: function() {return this._firstName},
      set: function(value) {this._firstName = value},
      enumerable: true,
      configurable: true,
    },
    _middleName: {
      enumerable: true,
      configurable: true,
      writable: true // Allow alter property
    },
    middleName: {
      get: function() { return this._middleName },
      set: function(value) {this._middleName = value},
      enumerable: true,
      configurable: true,
    }
  }
)

util.print(user)

user.firstName = 'John'
user.middleName = 'Smith'
util.print(user)

user._firstName = 11
user._middleName = 2222
util.print(user)


