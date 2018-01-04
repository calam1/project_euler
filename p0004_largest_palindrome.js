const R = require('ramda')
const palin = n => n.toString() === n.toString().split('').reverse().join('')

const largestPalindromeOne = () => {
  let xs = R.range(1, 1000)
  let ys = R.range(1, 1000)
 
  let product = R.curry((x, y) => x * y)
  let productApplicative = R.map(product)

  let products = R.ap(productApplicative(xs), ys)
  let filtered = products.filter(palin)
  return Math.max(...filtered)
}

const largestPalindromeTwo = () => {
  let xs = R.range(1, 1000)
  let ys = R.range(1, 1000)

  let products = xs.map( x => ys.map( y => x * y ) )
  let filtered = R.filter(palin, R.flatten(products))
  return Math.max(...filtered)
}


