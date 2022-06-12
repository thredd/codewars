// Isograms

function isIsogram(str){
    let noDupes = [...new Set(str.toLowerCase())]
    if(str.toLowerCase().length === noDupes.length){
      return true
    } else {
      return false
    }
  }