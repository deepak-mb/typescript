"use strict";
function addition(n1, n2) {
    return n1 + n2;
}
function printResults(num) {
    console.log('Result: ', num);
}
printResults(addition(1, 3));
let combineValue;
combineValue = addition;
console.log(combineValue(1, 2));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(1, 2, (res) => {
    console.log(res);
});
//# sourceMappingURL=functions-type.js.map