const f = createHelloWorld();
console.log(f({},null,42));


function createHelloWorld() {
    
    return function(...args): string {
        return "Hello World";
    };
};
