const R = require('ramda')

const fibonacci = n => {
  let a = 0
  let b = 1
  let c = 0

  if (n === 0) { return a }
  if (n === 1) { return b }

  for (let i = 2; i <= n; i++) {
    c = a + b
    a = b
    b = c
  }

  return c
}

const fibonacciEvenSum = () => {
  let a = 0
  let b = 1
  let c = 0
  let solution = []

  while (c <= 4000000 ) {
    c = a + b
    if (c % 2 === 0) { solution.push(c) }
    a = b
    b = c
  }

  let sum = 0
  for (let i = 0; i < solution.length; i ++) {
    sum += solution[i]
  }
  return sum
}

const fib = (x, y) =>
  x.concat(y < 2 ? y : x[y - 2] + x[y - 1])

const fibN = n =>
  R.reduce(fib, [ 0 ], R.range(1, n + 1))

console.log(
  //fibonacci(8)
  fibonacciEvenSum()
  //fibN(8)

)

function* fibGenerator() {
  let a = 0, b = 1, c = 0

  while (true) {
    yield a
    c = a + b
    a = b
    b = c
  }
}

var gen = fibGenerator()

let x = 0
let sum = 0

while (x <= 4000000) {
  x = gen.next().value
  if (x % 2 === 0) {
    sum += x
  }
}

console.log(sum)

sum = 0
for (let n of gen) {
    if (n <= 4000000) {
      if (n % 2 ===0) { sum += n }
    } else {
      break
    }
}

const I = require('immutable')
const generator = I.Seq(fibGenerator())

console.log(generator.takeWhile(n => n < 4000000).filter(n => n % 2 === 0).reduce((a, b) => a + b))
