// Contamination #1 -String-

function contamination(text, char){
    let total = ''
    if(text.length < 1 || char.length < 1){
      return ""
    } else {
      for(let i = 0; i < text.length; i++){
        total += char
      }
    }
    return total
  }