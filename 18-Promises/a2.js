
function print() {
  let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("This is an asynchronous promise running...")
      let error = true
      error ? reject() : resolve()
    }, 1200)
  })
  return prom
}

print().then(
  () => console.log("Promise is done."),
  () => console.log("Error")
)