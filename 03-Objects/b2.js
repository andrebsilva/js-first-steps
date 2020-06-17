let student = new Object()
student.firstName = "John"
student.lastName = "Doe"
student.age = 19

if(student.age > 17) {
  console.log("\nName     : ", student.firstName)
  console.log("Last Name: ", student.lastName)
  console.log("Age      : ", student.age)
}

// --------------------------------

let students = {
  firstName: 'Bob',
  lastName: 'Hilton',
  age: 18
}

if(students.age >= 18) {
  console.log("\nName     : ", students.firstName)
  console.log("Last Name: ", students.lastName)
  console.log("Age      : ", students.age)
}