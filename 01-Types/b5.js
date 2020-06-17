console.log("\n--- MUTABLE LET")

let firstCoordinates = {longitude: 100, latitude: 120}

console.log("\nLongitude: ", firstCoordinates.longitude, "\nLatitude: ", firstCoordinates.latitude)

firstCoordinates.longitude = 200
firstCoordinates.latitude = 240

console.log("\n\tLongitude: ", firstCoordinates.longitude, "\n\tLatitude: ", firstCoordinates.latitude)

// ----------------------------------------------------------------------------------------------------------------

console.log("\n--- MUTABLE CONST???")

const secondCoordinates = {longitude: 160, latitude: 180}

console.log("\nLongitude: ", secondCoordinates.longitude, "\nLatitude: ", secondCoordinates.latitude)

secondCoordinates.longitude = 320
secondCoordinates.latitude = 360

console.log("\n\tLongitude: ", secondCoordinates.longitude, "\n\tLatitude: ", secondCoordinates.latitude)

// ----------------------------------------------------------------------------------------------------------------


console.log("\n--- MUTABLE CONST")

const thirdCoordinates = Object.freeze({longitude: 160, latitude: 180})

console.log("\nLongitude: ", thirdCoordinates.longitude, "\nLatitude: ", thirdCoordinates.latitude)

thirdCoordinates.longitude = 320
thirdCoordinates.latitude = 360

console.log("\n\tLongitude: ", thirdCoordinates.longitude, "\n\tLatitude: ", thirdCoordinates.latitude)