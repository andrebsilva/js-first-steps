let RobotOne = class {
  static print(value) {
    console.log(value);
  }
}

RobotOne.print('ROBOT ONE STATIC')

let RobotTwo = class extends RobotOne {

}

RobotTwo.print('ROBOT TWO STATIC')