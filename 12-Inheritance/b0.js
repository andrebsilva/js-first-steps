class RobotOne {
  static print(value) {
    console.log(value);
  }
}

RobotOne.print('ROBOT ONE STATIC')

class RobotTwo extends RobotOne {
  // Class Inheritance RobotOne
}

RobotTwo.print('ROBOT TWO STATIC')