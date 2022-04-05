// NBA full 48 minutes average

function pointsPer48(ppg, mpg) {
    if(mpg === 0 || ppg === 0){
      return 0
    } else {
      return +((48/mpg) * ppg).toFixed(1)
    }
  }