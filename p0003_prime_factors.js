const R = require('ramda')

const primeFactors = n => {
  const solution = []
  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      solution.push(i)
      n /= i
    }

  }
  solution.push(n)

  return solution
}

//console.log(primeFactors(600851475143))

const funcPrimeFactors = (x, y) => {
  while (x % y === 0) {
    console.log(y)
    x /= y
  }

  return x
}

const functionalPrimeFactor = n => {
  R.reduce(funcPrimeFactors, n, R.range(2, Math.sqrt(n)))
}

console.log(functionalPrimeFactor(315))
