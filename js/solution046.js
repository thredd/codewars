// Pillars

const pillars = (num_pill, dist, width) => num_pill <= 1 ? 0 : ((num_pill - 2) * width) + ((num_pill-1) * dist * 100)

// also...

function pillars(num_pill, dist, width) {
    if(num_pill <= 1){
      return 0
    } else {
      return ((num_pill - 2) * width) + ((num_pill-1) * dist * 100)
    }
    
  }