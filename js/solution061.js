// Don't give me five!

function dontGiveMeFive(start,end){
    let allNums = []
    for(let i = start; i <= end; i++){
      if (!i.toString().includes('5')){
        allNums.push(i)
      }
    }
    return allNums.length
  }

  dontGiveMeFive(2,39)