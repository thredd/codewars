// Automorphic Number (Special Numbers Series #6)

function automorphic(n){
    let length = String(n).length
    let squared = n * n
    if(String(n) === String(squared).slice(-length)){
      return 'Automorphic'
    } else {
      return 'Not!!'
    }
  }