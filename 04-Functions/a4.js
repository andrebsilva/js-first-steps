// bind()  -- passing arguments together and creating a function to be called later

function displayCompleteName(testScoreI, testScoreII) {
  console.log(this.firstName + " " + this.middleName + " " + this.lastName)
  console.log(testScoreI, testScoreII)
}

let user = {
  firstName: "André",
  middleName: "Barcelos",
  lastName: "Silva"
}

let userDisplayName = displayCompleteName.bind(user)
userDisplayName(10, 110)

// ------------------------------

this.firstName = "John"
this.middleName = "Rock"
this.lastName = "Doe"

let thisDisplayName = displayCompleteName.bind(this, 20, 220)
thisDisplayName()

// ------------------------------

thisDisplayName.displayCompleteName = userDisplayName
thisDisplayName.displayCompleteName(30, 330)