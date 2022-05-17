// Ones and Zeros

const binaryArrayToNumber = arr => {
  let joined = arr.join('')
  return parseInt(joined,2)
}