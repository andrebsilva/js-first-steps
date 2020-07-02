let Profile = new Map([['firstName', 'Alan'], ['middleName', 'M'], ['lastName', 'Doe'], ['email', 'alan@email.com'], ['age', 18]])

function print() {
  console.log('---------- PRINTING --------')

  let fName = Profile.get('firstName') ? Profile.get('firstName') : '\b'
  let mName = Profile.get('middleName') ? Profile.get('middleName') : '\b'
  let lName = Profile.get('lastName') ? Profile.get('lastName') : '\b'
  
  Profile.get('firstName') || Profile.get('middleName') || Profile.get('lastName') ? console.log('Name :', fName, mName, lName) : null
  Profile.get('email') ? console.log('Email:', Profile.get('email')) : null
  Profile.get('age') ? console.log('Age  :', Profile.get('age')) : null

  console.log('\nSIZE :', Profile.size, '\n')

  for (let key of Profile.keys()) {
    console.log(key + ':', Profile.get(key))
  }
}

print()

Profile.delete('firstName')
Profile.delete('email')
print()

Profile.clear()
print()
