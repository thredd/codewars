// Character Frequency

let charFreq = message => {
    return message.split('').reduce((total, letter) => {
      total[letter] ? total[letter]++ : total[letter] = 1
      return total;
    }, {})
  }