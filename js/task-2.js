'use strict';

function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  const textMessage = `Shipping to ${country} will cost ${totalPrice} credits`
  return textMessage;
  console.log(textMessage);
  
}


getShippingMessage("Australia", 120, 50)
getShippingMessage("Germany", 80, 20)
getShippingMessage("Sweden", 100, 20)












