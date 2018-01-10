const R = require('ramda')

const isPrime = n => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

let numbers = n =>  R.range(2, n + 1)

console.log( numbers(20).filter(isPrime))

const primeNumberN = n => {
  const solution = []
  let counter = 2
  while (solution.length < n) {
    if (isPrime(counter)) {
      solution.push(counter)
    }
    counter+=1
  }
  return solution[n - 1]
}

//console.log('primeNumberN', primeNumberN(10001))

// thanks to https://curiosity-driven.org/sieve-with-generators
// function generator just creates a sequence starting from passed value
function *counter(n) {
  while (true) {
    yield n++
  }
}

const I = require('immutable')

function *primeGenerator() {
  // create a generator
  let seq = counter(2)
  let prime

  while(true) {
    prime = seq.next().value
    yield prime
    seq = filterPrime(seq, prime)
  }

}

function *filterPrime(seq, prime) {
  for (let num of seq) {
    if (num % prime !== 0) {
      yield num
    }
  }
}

const pg = I.Seq(primeGenerator())
let arr = pg.take(10)

// this doesn't appear to be lazy will blow stack, if above take value is too big
console.log(arr.last())


