// Substituting Variables Into Strings: Padded Numbers

function solution(value){
    return "Value is " + ("00000" + value).slice(-5);
  }