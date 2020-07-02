let Technologies = new Set()

Technologies.add('Node')
Technologies.add('React')
Technologies.add('React Native')
Technologies.add('Flutter')
Technologies.add('MongoDB')
Technologies.add('GraphQL')

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
