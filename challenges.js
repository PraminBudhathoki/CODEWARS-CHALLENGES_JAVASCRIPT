"use strict";
//coding challenge-1
function solution(number) {
  let sum = 0;
  for (let i = 1; i < Number(number); i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
  }
  return sum;
}
