
// Form The Minimum
// Best practice solution

function minValue(values){
  return +(values.filter((e, i, arr) => arr.indexOf(e) === i).sort().join(''))
}

// Solution #2
function minValue(values){
  let noDupes = []
  values.forEach(num => {
    if(!noDupes.includes(num)){
      noDupes.push(num)
    }
  })
  return +noDupes.sort().join('')
}