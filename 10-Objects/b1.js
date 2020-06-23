let car = {

  _modelName: null,

  get modelName() { return this._modelName },
  set modelName(value) { this._modelName = value },

}

console.log('Car Model Defined:', car.modelName) // undefined

car.modelName = 'Ka'

console.log('Car Model Defined:', car.modelName) // Ka

// ------------------------------
for(let i in car.modelName) {
  console.log('\tCar Model[' + i + ']', car.modelName[i])
}

console.log('Car Model Enumerable:', car.propertyIsEnumerable('_modelName')) // true

Object.defineProperty(car, '_modelName', {enumerable: false})

console.log('Car Model Enumerable:', car.propertyIsEnumerable('_modelName')) // false
