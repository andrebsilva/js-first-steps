
function print() {
  let prom = new Promise(() => {
    setTimeout(() => {
      console.log("This is an asynchronous promise running...")
    }, 2000)
  })
  return prom
}

print()