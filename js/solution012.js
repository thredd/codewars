// validate code with simple regex

function validateCode (code) {
    return String(code)[0] == 1 || String(code)[0] == 2 || String(code)[0] == 3 ? true : false
  }