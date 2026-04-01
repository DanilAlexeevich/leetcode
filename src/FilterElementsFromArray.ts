type Fn = (n: number, i: number) => any;

function filter(arr1: number[], fn1: Fn): number[] {
  let filteredArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (fn1(arr1[i], i)) {
      filteredArr.push(arr1[i]);
    }
  }
  return filteredArr;
}

let arr1 = [0, 10, 20, 30];

const fn1 = function greaterThan10(n) {
  return n > 10;
};
// Output [20,30]

// let arr1 = [1, 2, 3];

// const fn1 = function firstIndex(n, i) {
//   return i === 0;
// };
// // Output [1]

// let arr1 = [-2, -1, 0, 1, 2];
// const fn1 = function plusOne(n) {
//   return n + 1;
// };
// // Output [-2,0,1,2]

console.log(filter(arr1, fn1));
