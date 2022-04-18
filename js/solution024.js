// Regex count lowercase letters

function lowercaseCount(str){
    let lowerCount = 0
    for(const char of str){
      if(char.match(/[a-z]/)){
        lowerCount += 1
      }
    }
    return lowerCount
}