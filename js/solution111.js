// Unlucky Days

function unluckyDays(year){
    let friday13 = 0
      for (let i = 0; i < 12; i++){
          let d = new Date(year, i, 13)
          if(d.getDay() == 5){
            friday13++
         }
      }
      return friday13
  }
  
  // The getDay() method returns the day of the week (0 to 6) of a date:
  
  // Sunday = 0, Monday = 1,... Friday = 5