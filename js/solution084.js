// Sum of array singles

function repeats(arr){
    return arr.filter((num,i) => arr.indexOf(num) === arr.lastIndexOf(num)).reduce((acc,c) => acc + c,0)
  }
  
  
  
  // .indexOf() returns the position of the FIRST occurrence of a value
  // .lastIndexOf() returns the position of the LAST occurrence of a value
  // if a number has a dupe, it will have a different FIRST and LAST occurrence
  // if it is NOT a dupe, the FIRST and LAST will be the same, and the dupes are filtered out