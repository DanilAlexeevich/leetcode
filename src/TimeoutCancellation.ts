type JSONValue2 =
  | null
  | boolean
  | number
  | string
  | JSONValue2[]
  | { [key: string]: JSONValue2 };

type Fn4 = (...args: JSONValue2[]) => void;

function cancellable(fn: Fn4, args: JSONValue2[], t: number): Function {
  let timerId: ReturnType<typeof setTimeout> | null = null;

  const cancelFn = () => {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
    }
  };

  timerId = setTimeout(() => {
    fn(...args);
    timerId = null;
  }, t);

  return cancelFn;
}

const result: any[] = [];

const fn4 = (x: number) => x * 5;

const args = [2];
const t1 = 20;
const cancelTimeMs = 50;

const start = performance.now();

const log = (...argsArr: Parameters<typeof fn4>) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn4(...argsArr) });
};

const cancel = cancellable(log, args, t1);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
  console.log(result);
}, 100);

//Given a function fn, an array of arguments args, and a timeout
// t in milliseconds, return a cancel function cancelFn.
// After a delay of cancelTimeMs, the returned cancel 
// function cancelFn will be invoked. setTimeout(cancelFn, cancelTimeMs)
// Initially, the execution of the function fn 
// should be delayed by t milliseconds. If, before the delay 
// of t milliseconds, the function cancelFn is invoked, it should 
// cancel the delayed execution of fn. Otherwise, if cancelFn is not 
// invoked within the specified delay t, fn should 
// be executed with the provided args as arguments.