// Folding your way to the moon

function foldTo(distance){
    let paper = 0.0001
    let total = 0
    if(distance < 0){
      return null
    } else {
      while (distance > paper){
        paper *= 2 
        total += 1
      }
    }
    return total
  }