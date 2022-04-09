// Find out whether the shape is a cube

var cubeChecker = function(volume, side){
    if(volume / side / side === side && volume > 0){
      return true
    } else {
      return false
    }
  }