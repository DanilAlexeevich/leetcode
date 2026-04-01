function createCounter(n: number): () => number { 
  let res = n;  
    return function() {
      return res++;
    }
}

const counter = createCounter(10)
console.log(counter());
console.log(counter());
console.log(counter());