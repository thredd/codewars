// Closest elevator

function elevator(left, right, call){
    if (left === call && left !== right || Math.abs(left - call) < Math.abs(right - call)){
      return 'left'
    } else {
      return 'right'
    }
  }