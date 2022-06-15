// Minimize Sum Of Array (Array Series #1)

function minSum(arr){
    let sorted = arr.sort((a,b) => a-b)
    let halfway = Math.ceil(sorted.length / 2)
    let arr1 = sorted.slice(0,halfway)
    let arr2 = sorted.slice(halfway).sort((a,b) => b-a)
    
    let multArray = []
    for(let i = 0; i < arr1.length; i++){
      multArray[i] = arr1[i] * arr2[i]
    }
    return multArray.reduce((acc,c) => acc + c, 0)
  }