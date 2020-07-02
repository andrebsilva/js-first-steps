function Flight(airLine, flightNumber) { // Parameters
  this.airLine = airLine
  this.flightNumber = flightNumber

  this.getAirLine = function () {
    return this.airLine
  }

  this.getFlightNumber = function () {
    return this.flightNumber
  }

}

let flightOne = new Flight('LATAM','LT1163')
let flightTwo = new Flight('GOL', 'GL6163')

console.log('Voo: ', flightOne.getAirLine(), flightOne.getFlightNumber())
console.log('Voo: ', flightTwo.getAirLine(), flightTwo.getFlightNumber())