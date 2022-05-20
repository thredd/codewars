// Find the stray number

function stray(numbers){
    let sorted = numbers.sort()
    if(sorted[0] === sorted[1]){
      return sorted[sorted.length -1]
    } else {
      return sorted[0]
    }
  }