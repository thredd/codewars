// Collatz Conjecture (3n+1)

function hotpo(n, acc = 0){
    if(n <= 1) return acc //Optional Handler to n = 0
    else return hotpo(n%2==0 ? n/2 : 3*n+1, acc+1)
  }