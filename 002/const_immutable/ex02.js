
const movies = Object.freeze(['Titanic', 'Avatar']) // var/let works too

console.log(movies) // ['Titanic', 'Avatar']

movies.push('Avengers') // Cannot add property

console.log(movies) // ['Titanic', 'Avatar']