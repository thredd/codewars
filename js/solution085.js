// max diff - easy

function maxDiff(list){
    if(list <= 1){
      return 0
    } else {
      return Math.max(...list) - Math.min(...list)
    }
  }