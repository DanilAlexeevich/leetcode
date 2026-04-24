import { JSONValue } from "./types/types";

type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

const fn3 = (a, b, c) => a * b * c;

function once(fn: Function): OnceFn {
  let count = 0;
  return function (...args) {
    count++
    if(count > 1) return 'undefined, fn was not called';
    return fn(...args);
  };
}

const onceFn = once(fn3);

console.log(onceFn(5, 7, 4)); // 140
console.log(onceFn(2, 3, 6)); // undefined, fn was not called
console.log(onceFn(4, 6, 8));

// console.log(onceFn(1, 2, 3)); // 6
// console.log(onceFn(2, 3, 6));

// fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// Output: [{"calls":1,"value":6}]
// Given a function fn, return a new function that is identical
// to the original function except that it ensures fn is called
// at most once. The first time the returned function is called,
// it should return the same result as fn. Every subsequent
// time it is called, it should return undefined.
