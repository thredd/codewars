// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

function remove (string) {
    return string.replace(/!/g,'') + '!'
  }