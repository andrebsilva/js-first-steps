let account = (function() {
  
  let balance = 1000

  return {
    name: 'John',
    getBalance: function() { return balance },
    addIntrest: function(value) { balance += value }
  }

}())

console.log(account.name)
console.log(account.getBalance())

account.addIntrest(100)
console.log(account.getBalance())

account.balance = 2000
console.log(account.balance)
console.log(account.getBalance())

account.myBalance = 3000
console.log(account.myBalance)
console.log(account.getBalance())