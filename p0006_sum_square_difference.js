const R = require('ramda')

const sumSquares = n => {
  const solution = []
  for (let i = 1; i < n + 1; i++) {
    solution.push(Math.pow(i, 2))
  }
  return R.reduce(R.add, 0, solution)
}

const squarePush = (arr, n) => arr.concat(Math.pow(n, 2))
const squaredValues = n => R.reduce(squarePush, [], R.range(1, n + 1))
const sumSquaresFunctional = n => R.reduce(R.add, 0, squaredValues(n))

console.log(sumSquares(10))
console.log(sumSquaresFunctional(10))

const squareSum = n => {
  let sum = 0
  for (let i = 1; i < n + 1; i++) {
    sum += i
  }

  return Math.pow(sum, 2)
}

const squareSumFunctional = n => Math.pow(R.reduce(R.add, 0, R.range(1, n + 1)), 2)

console.log( squareSum(10))
console.log(squareSumFunctional(10))

const diff = n => R.subtract(squareSumFunctional(n), sumSquaresFunctional(n))

console.log( diff(10))
