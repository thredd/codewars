// Remove the time

function shortenToDate(longDate) {
    let spl = longDate.split(',')
    return spl.slice(0,-1).join(',')
  }