// Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()

function firstToLast(str,c){
    return (str.indexOf(c) < 0) ? -1 : str.lastIndexOf(c) - str.indexOf(c)
  }