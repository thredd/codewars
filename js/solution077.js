// Currying functions: multiply all elements in an array

let multiplyAll = 
  arr =>
    int =>
      arr.map(num => num * int)