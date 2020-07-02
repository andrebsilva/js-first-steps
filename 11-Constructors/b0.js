// Prototypes

let profile = {
  firstName: 'John',
}

console.log('fistName is in profile?', 'firstName' in profile) // true
console.log('profile has firstName?', profile.hasOwnProperty('firstName')) // true
console.log('hasOwnProperty is in profile?', 'hasOwnProperty' in profile) // true
console.log('profile has hasOwnProperty?', profile.hasOwnProperty('hasOwnProperty')) // false

console.log('Object.prototype has hasOwnProperty?', Object.prototype.hasOwnProperty('hasOwnProperty')) // true