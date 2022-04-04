// Price of Mangoes

function mango(quantity, price){
    let third = Math.floor(quantity / 3)
    return price * (quantity - third)
  }