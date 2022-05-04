// Calculate Price Excluding VAT

function excludingVatPrice(price){
    if(price){
      return Number((price / 1.15).toFixed(2))
    } else if (price == null){
      return -1
    } else {
      return 0
    }
  }