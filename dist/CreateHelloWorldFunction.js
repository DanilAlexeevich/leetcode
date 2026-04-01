"use strict";
const f = createHelloWorld();
f({}, null, 42);
function createHelloWorld() {
    return function (...args) {
        return "Hello World";
    };
}
;
