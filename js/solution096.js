// Maximum Triplet Sum (Array Series #7)

function maxTriSum(numbers){
    let newArr = [...new Set(numbers)].sort((a,b) => b-a)
    return newArr[0] + newArr[1] + newArr[2]
}