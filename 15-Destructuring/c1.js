function print({name, age, score}) {
  console.log(`Name : ${name}`)
  console.log(`Age  : ${age}`)
  console.log(`Score: ${score}\n`)
}

print({
  name:'John',
  age: 22,
  score: 100
})

// --------------------------------

let profile = {
  name: 'Alan',
  age: 19,
  score: 99.6
}

print(profile)