let Profile = new Map()

Profile.set('firstName', 'Alan')
Profile.set('middleName', 'M')
Profile.set('lastName', 'Doe')
Profile.set('email', 'alan@email.com')
Profile.set('age', 18)

function print() {
  console.log('---------- PRINTING --------')

  let fName = Profile.get('firstName') ? Profile.get('firstName') : '\b'
  let mName = Profile.get('middleName') ? Profile.get('middleName') : '\b'
  let lName = Profile.get('lastName') ? Profile.get('lastName') : '\b'
  
  Profile.get('firstName') || Profile.get('middleName') || Profile.get('lastName') ? console.log('Name :', fName, mName, lName) : null
  Profile.get('email') ? console.log('Email:', Profile.get('email')) : null
  Profile.get('age') ? console.log('Age  :', Profile.get('age')) : null

  console.log('\nSIZE :', Profile.size, '\n')

  console.log('Has firstName :', Profile.has('firstName'))
  console.log('Has middleName:', Profile.has('middleName'))
  console.log('Has lastName  :', Profile.has('lastName'))
  console.log('Has email     :', Profile.has('email'))
  console.log('Has age       :', Profile.has('age'))
}

print()

Profile.delete('middleName')
print()

Profile.delete('email')
print()

Profile.clear()
print()
