let car = {

  _modelName: null,
  _motorSize: null,
  _doorsQuantity: null,
  _wheelTechnology: null,

  get modelName() { return this._modelName },
  set modelName(value) { this._modelName = value },

  get motorSize() { return this._motorSize },
  set motorSize(value) { this._motorSize = value },

  get doorsQuantity() { return this._doorsQuantity },
  set doorsQuantity(value) { this._doorsQuantity = value },

  get wheelTechnology() { return this._wheelTechnology },
  set wheelTechnology(value) { this._wheelTechnology = value },
}

console.log(car.modelName)

car.modelName = 'Ka'

console.log(car.modelName)