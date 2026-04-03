type JSONValue2 =
  | null
  | boolean
  | number
  | string
  | JSONValue2[]
  | { [key: string]: JSONValue2 };
type Fn4 = (...args: JSONValue2[]) => void;

function cancellable(fn: Fn4, args: JSONValue2[], t: number): Function {
  return;
}

const result = [];

const fn4 = (x) => x * 5;

const args = [2],
  t1 = 20,
  cancelTimeMs = 50;

const start = performance.now();

type Fn5 = typeof fn4;

const log = (...argsArr: Parameters<Fn5>) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn4(...argsArr) });
};

const cancel = cancellable(log, args, t1);

const maxT = Math.max(t1, cancelTimeMs);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
  console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15);
