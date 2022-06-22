// Simple Fun #74: Growing Plant

function growingPlant(upSpeed,downSpeed,desiredHeight){
    if(desiredHeight < upSpeed){
      return 1
    } else {
      return Math.ceil(1 + (desiredHeight - upSpeed) / (upSpeed - downSpeed))
    }
  }