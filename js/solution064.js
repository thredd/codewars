// Mumbling

function accum(s){
    return s.split('').map((v,i) => v[0].toUpperCase() + v.toLowerCase().repeat(i)).join('-')
  }