// unknown type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'aaa';

if(typeof userInput === 'string'){
    userName = userInput;
}

// never type
function generateError(msg: string, code: number): never{
    throw {
        message: msg,
        errorCode: code
    }
}

const result = generateError('Something went wrong', 500);

console.log(result);