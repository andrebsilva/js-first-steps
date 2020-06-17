// apply() -- passing arguments together as an array

function displayCompleteName(testScoreI, testScoreII) {
  console.log(this.firstName + " " + this.middleName + " " + this.lastName)
  console.log((testScoreI)?testScoreI:'', (testScoreII)?testScoreII:'')
}

let user = {
  firstName: "André",
  middleName: "Barcelos",
  lastName: "Silva"
}

displayCompleteName.apply(user, [10])

// ------------------------------

this.firstName = "John"
this.middleName = "Rock"
this.lastName = "Doe"

const tests = [20, 220]
displayCompleteName.apply(this, tests)