// Determine offspring sex based on genes XX and XY chromosomes

function chromosomeCheck(sperm){
    if(sperm.includes('Y')){
      return "Congratulations! You're going to have a son."
    } else {
      return "Congratulations! You're going to have a daughter."
    }
  }
