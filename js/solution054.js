// How old will I be in 2099?

function calculateAge(birthYr, relYr){
    let present = relYr - birthYr
    let future = birthYr - relYr
    if(birthYr === relYr){
      return "You were born this very year!"
    } else if(birthYr < relYr && present == 1){
      return "You are 1 year old."
    } else if(birthYr < relYr){
      return `You are ${present} years old.`
    } else if(birthYr > relYr && future > 1){
      return `You will be born in ${future} years.`
    } else if(birthYr > relYr && future === 1){
      return "You will be born in 1 year."
    } 
  }