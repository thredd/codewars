// Ensure question

function ensureQuestion(s) {
    if(s.includes('?')){
      return s
    } else {
      return s + '?'
    }
  }