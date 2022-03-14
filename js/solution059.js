// Is it a palindrome?

function isPalindrome(x) {
    return x.toLowerCase().split('').reverse().join('') === x.toLowerCase()
  }