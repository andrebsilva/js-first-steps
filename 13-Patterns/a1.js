let account = (

  function() {
    
    let balance = 1000

    function getBalance() {
      return balance
    }

    function addIntrest(value) {
      balance += value
    }

    return {
      name: 'John',
      getBalance: getBalance,
      addIntrest: addIntrest
    }
  
  }()

)

console.log('Account Name:', account.name)
console.log('Account Balance:', account.getBalance())

account.addIntrest(100)
console.log('Account Balance:', account.getBalance())

account.balance = 2000
console.log('Local Balance:', account.balance)
console.log('Account Balance:', account.getBalance())

account.myBalance = 3000
console.log('Local My Balance:', account.myBalance)
console.log('Account Balance:', account.getBalance())