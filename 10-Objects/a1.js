// in Operator

function print() {
  console.log("\nCourse:  ", this.title)
  console.log("Teacher: ", this.teacher.firstName, this.teacher.lastName)
}

let course = { // Create Object
  teacher: {  // Create Object
    firstName: "John", // Put Attribute
    lastName: "Doe" // Put Attribute
  }
}

course.title = "Introduction to MongoDB" // Put Attribute

print.call(course)

console.log("\nname in course?", "name" in course) // false
console.log("teacher in course?", "teacher" in course) // true
console.log("firstName in course?", "firstName" in course) // false
console.log("lastName in course.teacher?", "lastName" in course.teacher) // true

console.log("\ntoString in course?", "toString" in course) // true
console.log("toString in course.teacher?", "toString" in course.teacher) // true

console.log("\nlength in course?", "length" in course) // false

let arr = []
console.log("\nlength in arr?", "length" in arr) // true
console.log("concat in arr?", "concat" in arr) // true