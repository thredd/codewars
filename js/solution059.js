// Super Duper Easy

function problem(x){
    return typeof x !== 'number' ? 'Error' : x * 50 + 6
  }

// or...

function problem(x){
    if(typeof(x) === 'number'){
      return x * 50 + 6
    } else{
      return 'Error'
    }
  }