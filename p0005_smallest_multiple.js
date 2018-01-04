const smallestMultiple = (n) => {
  let i = 1
  while(true) {
    let flag = true
    for (let j = 1; j < n + 1; j++) {
      if (i % j !== 0) {
        flag = false
        break  
      } 
    }
    if (flag) return i
    i += 1
  }
}