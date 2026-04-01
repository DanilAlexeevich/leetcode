type Fn1 = (accum: number, curr: number) => number;

function reduce(nums: number[], fn2: Fn1, init: number): number {
  if (nums.length == 0) return init;

  nums.forEach((el) => {
    init = fn2(init, el);
  });

  return init;
}

let nums = [1, 2, 3, 4];
const fn2 = function sum(accum, curr) {
  return accum + curr;
};
let init = 0;
// Output 10

// let nums = [1, 2, 3, 4];
// const fn2 = function sum(accum, curr) {
//   return accum + curr * curr;
// };
// let init = 100;
// // Output 130

console.log(reduce(nums, fn2, init));
