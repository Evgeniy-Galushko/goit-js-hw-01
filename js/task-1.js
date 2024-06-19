'use strict';



function makeTransaction (quantity, pricePerDroid) {
  const colic = quantity;
  const price = pricePerDroid * colic;
  const textTheOrder = `You ordered ${colic} droids worth ${price} credits!`
  return textTheOrder;
  console.log(textTheOrder)
}

// function makeTransaction (quantity, pricePerDroid) {
//   const textTheOrder = `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`
//   return textTheOrder;
//   console.log(textTheOrder)
// }



console .log(makeTransaction( 5 , 3000 ));  
console .log(makeTransaction( 3 , 1000 ));  
console .log(makeTransaction( 10 , 500 ));











