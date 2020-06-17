// call() -- passing arguments together

function displayCompleteName() {
  if (arguments[0] && arguments[1]) {
    console.log(arguments[0] + this.firstName + " " + this.middleName + " " + this.lastName + arguments[1])
  } else {
    console.log(this.firstName + " " + this.middleName + " " + this.lastName)
  }
}

let user = {
  firstName: "André",
  middleName: "Barcelos",
  lastName: "Silva"
}

displayCompleteName.call(user)

// ------------------------------

this.firstName = "John"
this.middleName = "Rock"
this.lastName = "Doe"
displayCompleteName.call(this, 'Hello, ', '!')