function print(options) {
  console.log(`Name : ${options.name}`)
  console.log(`Age  : ${options.age}`)
  console.log(`Score: ${options.score}\n`)
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