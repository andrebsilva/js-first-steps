function whatProvider(email)  { 
  // Locate the position of '@'
  let pointerA = arguments[0].indexOf('@') // (0, 1, 2 ...) arguments[]

  // Separate string post '@'
  let pseudoProvider = email.slice(++pointerA, email.lenght)
  
  // Locate position of '.' 
  let pointerB = pseudoProvider.lastIndexOf('.')

  // Separate string before '.'
  let provider = pseudoProvider.substr(0, pointerB)

  // Check if provider has 'mail.'
  if (provider.indexOf("mail.") >= 0) {
    provider = provider.replace('mail.', '') // Remove 'mail.'
  }

  // Return Email Provider
  console.log(provider)
  return provider
}

const emailList = [
  'barcelos@uft.edu.br',
  'barcelos.ds@gmail.com',
  'andrebsilva@outlook.com',
  'doe@mail.uft.edu.br'
]

emailList.forEach(whatProvider)