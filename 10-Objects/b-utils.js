function printObjConsole() {
  console.log()
  let allProperties = Object.keys(this)
  for(let i in allProperties){
    if(typeof this[allProperties[i]] == 'object') {
      console.log(allProperties[i] + '.')
      printObjConsole.call(this[allProperties[i]],allProperties[i]) // Recursive call: Two arguments
    } else {
      console.log((arguments[0]?'\t':'') + allProperties[i] + ":", this[allProperties[i]])
    }
  }
}

function print(args) {
  printObjConsole.call(args)
}

module.exports = {
  print,
  printObjConsole
}