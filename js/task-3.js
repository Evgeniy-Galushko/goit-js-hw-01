"use strict";

function getElementWidth(content, padding, border) {
  const side = Number.parseFloat(padding) * 2;
  const frame = Number.parseFloat(border) * 2;
  const result = Number.parseFloat(content) + side + frame;
  return result;
  console.log(result);
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));

export default function inSixMonths(period) {
  const yer = parseInt(period.slice(0, 4));
  const day = parseInt(period.slice(8, 10));

  console.log(yer, day);

  const data = new Date(period);
  const newMonth = data.getMonth() + 1 - 6;

  let newYer;
  let month;
  if (0 >= newMonth) {
    newYer = yer - 1;
    month = 12 + newMonth;
  } else {
    newYer = yer;
    month = newMonth;
  }

  return {
    beginningOfPeriod: period,
    endOfPeriod: `${newYer}-${month.toString().padStart(2, 0)}-${day
      .toString()
      .padStart(2, 0)}`,
  };
}

console.log(inSixMonths("2025-08-20"));
