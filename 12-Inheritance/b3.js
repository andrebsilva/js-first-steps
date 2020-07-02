class RobotOne {
  
  static print(value) {
    console.log(value)
  }

  set(value) {
    this.text = value
  }

  get() {
    return this.text
  }

}

botOne = new RobotOne

botOne.set('Júlia')

RobotOne.print(botOne.get())