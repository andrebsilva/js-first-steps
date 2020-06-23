let course = { // Create Object
  teacher: {  // Create Object
    firstName: "John", // Put Attribute
    lastName: "Doe", // Put Attribute
    email: "email@email.com"
  },
  title: "Introduction to Programming"
}

// for(let i in course){
//   console.log(course[i])
// }

function printObjConsole() {
  let allProperties = Object.keys(this)
  for(let i in allProperties){
    if(typeof this[allProperties[i]] == 'object') {
      console.log(allProperties[i] + '.')
      printObjConsole.call(this[allProperties[i]],allProperties[i]) // Recursive call: Two arguments
    } else {
      console.log((arguments[0]?'\t':'') + allProperties[i] + ":", this[allProperties[i]])
    }
  }
}
printObjConsole.call(course)
