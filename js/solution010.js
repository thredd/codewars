// Freudian translator

function toFreud(string) {
    let newString = ''
    if(string === ''){
      return ''
    } else {
      for(let i = 0; i < string.split(' ').length; i++){
        newString += 'sex '
      }
    }
    return newString.trim()
  }