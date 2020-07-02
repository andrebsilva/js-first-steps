function Laptop(manufacturer, memory, capacity) { // Parameters
  this.manufacturer = manufacturer
  this.memory = memory
  this.capacity = capacity
  this.display = function () {
    console.log('\nLaptop:')
    console.log(' Manufacturer:', this.manufacturer,)
    console.log(' Memory:', this.memory, 'GB')
    console.log(' Capacity:', this.capacity, 'GB')
  }

}

let LaptopOne = new Laptop('DELL', 16, 240)
let LaptopTwo = new Laptop('APPLE', 8, 480)

LaptopOne.display()
LaptopTwo.display()