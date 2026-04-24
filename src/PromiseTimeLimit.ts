type Ptl = (...params: any[]) => Promise<any>;

function timeLimit(fn: Ptl, t: number): Ptl {
  return async function (...args) {
    // Промис №1: сама функция
    const fnPromise = fn(...args);

    // Промис №2: таймер-бомба
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    return Promise.race([fnPromise, timeoutPromise]);
  };
}

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
