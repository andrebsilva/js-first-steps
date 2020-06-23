class Counter {

  #like = 0

  getLike() {
    return this.#like
  }

  incrementLike() {
    this.#like++
  }


  // // ECMAScript 2020
  // #decrementLike() {
  //   this.#like > 0 ? this.#like-- : this.#like
  // }
  // #isPositive() {
  //   return this.#like > 0 ? true : false
  // }
  // decrementLikeCorrectly() {
  //   this.#isPositive ? this.#decrementLike : this.getLike()
  // }

}

const c = new Counter()

c.incrementLike()
c.incrementLike()
c.incrementLike()

console.log('Counter Like:', c.getLike())