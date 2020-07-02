let Technologies = new Set().add('Node').add('React').add('React Native').add('Flutter').add('MongoDB').add('GraphQL')

function print() {
  for (let tech of Technologies) {
    console.log(tech)
  }
  console.log('\nSIZE:', Technologies.size)
}

print()
console.log('Has Node:', Technologies.has('Node'))
console.log('Has react:', Technologies.has('react'))
console.log('Has Java:', Technologies.has('Java'))

Technologies.clear()
print()
