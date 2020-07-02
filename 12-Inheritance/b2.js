let RobotOne = class RobotOne {
  static print(value) {
    console.log(value);
  }
}

RobotOne.print('ROBOT ONE STATIC')

let RobotTwo = class RobotTwo extends RobotOne {

}

RobotTwo.print('ROBOT TWO STATIC')