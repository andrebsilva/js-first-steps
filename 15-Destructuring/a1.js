let Profile = {
  fistName: 'John',
  middleName: 'N',
  lastName: 'Doe',
  score: '98'
}

const {fistName:fName, middleName:mName, lastName:lName, score:s} = Profile

console.log(`Name : ${fName} ${mName} ${lName}\nScore: ${s}`)