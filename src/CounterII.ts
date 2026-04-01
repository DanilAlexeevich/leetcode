type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounterII(init: number): Counter {
  const res = init;
  let inc = init;
  return {
    increment() {
      return ++inc;
    },
    decrement() {
      return --inc;
    },
    reset() {
      inc = res;
      return res;
    },
  }
}

const counterII = createCounterII(0);
// console.log(counterII.increment()); //6
// console.log(counterII.reset()); //5
// console.log(counterII.decrement()); //4

console.log(counterII.increment()); //1
console.log(counterII.increment()); //2
console.log(counterII.decrement()); //1
console.log(counterII.reset()); //0
console.log(counterII.reset()); //0