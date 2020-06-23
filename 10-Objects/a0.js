// CREATE and PUT and SET

function print() {
  console.log("\nCourse:  ", this.title)
  console.log("Teacher: ", this.teacher.firstName, this.teacher.lastName)
}

let courseOne = new Object() // Create Object
courseOne.teacher = new Object() // Create Object
courseOne.teacher.firstName = "André" // Put Attribute
courseOne.teacher.lastName = "Barcelos" // Put Attribute
courseOne.title = "Introduction to JavaScript" // Put Attribute

print.call(courseOne)

let courseTwo = { // Create Object
  teacher: {  // Create Object
    firstName: "John", // Put Attribute
    lastName: "Doe" // Put Attribute
  }
}

courseTwo.title = "Introduction to MongoDB" // Put Attribute

print.call(courseTwo)
