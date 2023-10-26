"use strict";
// unknown type
let userInput;
let userName;
userInput = 5;
userInput = 'aaa';
if (typeof userInput === 'string') {
    userName = userInput;
}
// never type
function generateError(msg, code) {
    throw {
        message: msg,
        errorCode: code
    };
}
const result = generateError('Something went wrong', 500);
console.log(result);
