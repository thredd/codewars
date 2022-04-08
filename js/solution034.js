// Who is going to pay for the wall?

function whoIsPaying(name){
    if(name.length <= 2){
      return [name]
    } else {
      return [name,name.substring(0,2)]
    }
  }