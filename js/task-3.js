'use strict';

function getElementWidth(content, padding, border) {
  const side = Number.parseFloat(padding) * 2
  const frame = Number.parseFloat(border) * 2
  const result = Number.parseFloat(content) + side + frame;
  return result;
  console.log(result)
}

// function getElementWidth(content, padding, border) {
//   const result = Number.parseFloat(content) + (Number.parseFloat(padding) * 2) + (Number.parseFloat(border) * 2);
//   return result;
//   console.log(result)
// }



getElementWidth("50px", "8px", "4px")
getElementWidth("60px", "12px", "8.5px")
getElementWidth("200px", "0px", "0px")



