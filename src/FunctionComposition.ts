type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
}

const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
let x = 4;
// Output: 65

// const functions = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
// let x = 1;
// // Output 1000

// const functions = []; 
// let x = 42;
// // Output 42

console.log(compose(functions)(x));
