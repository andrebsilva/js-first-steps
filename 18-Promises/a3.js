
function print(value) {
  let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("\nThis is an asynchronous promise running...")
      let success = value
      success ? resolve('Done') : reject('Error')
    }, 1200)
  })
  return prom
}

print(true).then(
  (success) => console.log(success),
  (failure) => console.log(failure)
)

print(false).then(
  (success) => console.log(success),
  (failure) => console.log(failure)
)