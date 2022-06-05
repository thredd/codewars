// Sum of all arguments

function sum(...nums){
    return nums.reduce((acc,c) => acc + c, 0)
  }
  
  // ... (three dots) turns a blank argument into an array!!
  // this allows you to use .reduce()