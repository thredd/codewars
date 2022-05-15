// Remove duplicates from list

function distinct(a){
    let noDupes = []
    a.forEach(c => {
      if(!noDupes.includes(c)){
        noDupes.push(c)
      }
    })
    return noDupes
  }