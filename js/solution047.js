// Is it a number?

function isDigit(s) {
    if(typeof s != 'string'){
      return false
    } else {
      return !isNaN(s) && !isNaN(parseInt(s))
    }
    
  }