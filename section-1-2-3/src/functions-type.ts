// fn return type is number 
function addition(n1:number, n2: number): number {
    return n1 + n2;
}

// fn return type is void since we dont return anything 
function printResults(num: number): void {
    console.log('Result: ', num)
}

printResults(addition(1, 3));

// Function type declaration: 2 params of number type and return number type
let combineValue: (n1: number, n2: number) => number;

// Creating a pointer to a function
combineValue = addition;

console.log(combineValue(1,2));

function addAndHandle(n1:number, n2: number, cb: (result: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(1, 2, (res)=> {
    console.log(res);
});