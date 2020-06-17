// CONST NOT IMMUTABLE

const movies = ['Titanic', 'Avatar'] // var/let works too

console.log(movies) // ['Titanic', 'Avatar']

movies.push('Avengers')

console.log(movies) // ['Titanic', 'Avatar', 'Avengers']

movies.shift()

console.log(movies) // ['Avatar', 'Avengers']