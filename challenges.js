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
//coding challenge -2
function digPow(n, p) {
  let sum = 0,
    rem = 0,
    b = n,
    k = 0,
    x = n.toString().length;
  for (let i = 0; x > 0; i++, x--) {
    rem = (n % 10) ** (p + x - 1);
    sum = sum + rem;
    n = Math.floor(n / 10);
  }
  k = sum / b;
  if (k === Math.floor(k)) {
    return k;
  } else {
    return -1;
  }
}

//coding challenge -3
function findNextSquare(sq) {
  let squareRoot = Math.sqrt(sq);
  if (squareRoot === Math.trunc(squareRoot)) {
    return (squareRoot + 1) ** 2;
  } else {
    return -1;
  }
}
