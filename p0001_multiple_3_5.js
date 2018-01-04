const R = require('ramda')

const threeOrFive = n => {
  let solution = []

  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      solution.push(i)
    }
  }

  return solution
}

const func3or5 = (x, y) =>
  y % 3 === 0 || y % 5 === 0  ? x.concat(y) : x

const threeOrFiveFunctional = n =>
  R.reduce(func3or5, [], R.range(1, n + 1))

console.log(
  threeOrFive(10),
  threeOrFiveFunctional(10)
)
