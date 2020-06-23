// in Operator

function print() {
  console.log("\n", this)
}

let course = { // Create Object
  teacher: {  // Create Object
    firstName: "John", // Put Attribute
    lastName: "Doe", // Put Attribute
    email: "email@email.com"
  },
  title: "Introduction to Programming"
}

course.teacher.age = 25

print.call(course)

delete course.title
// delete course.teacher.email

print.call(course)

// console.log("\n", Object.keys(course))
// console.log("\n", Object.keys(course.teacher))
// console.log("\n", Object.keys(course.title))

// console.log("\n", course.title[0])