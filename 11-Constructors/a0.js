function Flight() {

}

let flightOne = new Flight
let flightTwo = new Flight

// Checking if object is instance of Class
console.log('\nflightOne is instance of Flight?', flightOne instanceof Flight)
console.log('flightTwo is instance of Flight?', flightTwo instanceof Flight)

// Checking if has constructor of Class
console.log('\nflightOne has constructor of Flight?', flightOne.constructor === Flight)
console.log('flightTwo has constructor of Flight?', flightTwo.constructor === Flight)
