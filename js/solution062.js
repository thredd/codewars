// Summing a number's digits

function sumDigits(number){
    return String(Math.abs(number)).split('').reduce((acc, c) => acc + +c, 0)
}

sumDigits(5728)