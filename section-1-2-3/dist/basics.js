"use strict";
function add(n1, n2, printResult, resultPhrase) {
    const result = n1 + n2;
    if (printResult) {
        console.log(resultPhrase + result);
        return;
    }
    else {
        return n1 + n2;
    }
}
let n1 = 5, n2 = 100, printResult = true, resultPhrase = 'Result is ';
add(n1, n2, printResult, resultPhrase);
//# sourceMappingURL=basics.js.map