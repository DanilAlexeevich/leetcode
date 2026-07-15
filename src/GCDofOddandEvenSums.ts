import { JSONValue } from "./types/types";

function gcdOfOddEvenSums(n: number): number {
  return getGcd(getEvenNumbers(n), getOddNumbers(n));
}

function getEvenNumbers(count): JSONValue {
  let sumEven: number = 0;
    for (let i = 1; i <= count; i++) {
      sumEven += i * 2;
    }
    return sumEven;
}

function getOddNumbers(count: number): number {
   let oddEven: number = 0;
    for (let i = 1; i <= count; i++) {
      oddEven += (i * 2) - 1;
    }
    return oddEven;
}

function getGcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

console.log(gcdOfOddEvenSums(6));

// You are given an integer n. Your task is to compute the GCD (greatest common divisor) of two values:
// sumOdd: the sum of the smallest n positive odd numbers.
// sumEven: the sum of the smallest n positive even numbers.
// Return the GCD of sumOdd and sumEven.