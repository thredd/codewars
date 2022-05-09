// Blood-Alcohol Content

function bloodAlcoholContent(drinks, weight, sex, time){
    if(sex === 'female'){
      return +(((drinks.ounces*drinks.abv) * (5.14 / weight) * 0.66) - .015 * time).toFixed(4)
    } else if(sex === 'male'){
      return +(((drinks.ounces*drinks.abv) * (5.14 / weight) * 0.73) - .015 * time).toFixed(4)
    }
  }