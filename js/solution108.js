// Return the Missing Element

function getMissingElement(superImportantArray){
    let nums = [0,1,2,3,4,5,6,7,8,9]
    return +(nums.filter(num => !superImportantArray.includes(num)))
  }