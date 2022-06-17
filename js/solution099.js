// Simple Fun #261: Whose Move

function whoseMove(lastPlayer,win){
    if(win === true){
      return lastPlayer
    } else if(lastPlayer === "white" && win === false){
      return "black"
    } else {
      return "white"
    }
  }