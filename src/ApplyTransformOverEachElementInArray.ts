function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }

  return arr;
}

let arr = [1, 2, 3];

const fn = function constant() {
  return 42;
};

console.log(map(arr, fn));
