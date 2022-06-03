// Sort Out The Men From Boys

function menFromBoys(arr){
    let evens = arr.filter(num => num % 2 === 0).sort((a,b) => a-b)
    let odds = arr.filter(num => num % 2 !== 0).sort((a,b) => b-a)
    let combined = evens.concat(odds)
    return [...new Set(combined)]
  }