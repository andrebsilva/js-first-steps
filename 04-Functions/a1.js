let userA = {
  firstName: "Júlia",
  middleName: "Menezes",
  lastName: "Barcelos",
  displayFullName: function(){
    return userA.firstName + " " + userA.middleName + " " + userA.lastName
  }
}

console.log(userA.displayFullName())

// ------------------------------

let userB = {
  firstName: "Monique Hevellyn",
  middleName: "de Brito",
  lastName: "Menezes",
  displayFullName: function(){
    return this.firstName + " " + this.middleName + " " + this.lastName
  }
}

console.log(userB.displayFullName())

// ------------------------------

function displayCompleteName() {
  return this.firstName + " " + this.middleName + " " + this.lastName
}

let userC = {
  firstName: "André",
  middleName: "Barcelos",
  lastName: "Silva",
  displayFullName: displayCompleteName
}

console.log(userC.displayFullName())

