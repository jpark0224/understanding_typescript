function add(n1: number, n2: number): number {
    return n1 + n2
}

function printResult(num: number) {
    console.log("Result: " + num)
}

printResult(add(5, 12))

// the return type of printResult is not string, but void. 
// It's because the function doesn't have a return statement. 
// undefined is a valid type in TypeScript. 
// for a return type, void is used when there is no return value, and undefined is used when there is.
// void could be used with return too. 

// the below function works in JS.
let combineValues;

combineValues = add;

console.log(combineValues(8, 8))

// without TypeScript, the below code compiles and throws and error.
let combineValues2;

combineValues2 = add;
combineValues2 = 5;

console.log(combineValues2(8, 8))

// Function type
// now 5 cannot be assigned to combineValues3, but a wrong function called printResult which
// only takes one argument can be assigned and it can't be detected.
let combineValues3: Function;

combineValues3 = add;
combineValues3 = printResult;
// combineValues3 = 5

console.log(combineValues3(8, 8))

// To fix above errors, we can try below which is called function types.

let combineValues4: (a: number, b: number) => number;

combineValues4 = add;
// the below throws a linting error.
// combineValues4 = printResult;

console.log(combineValues4(8, 8))

// callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}

addAndHandle(10, 20, (result) => {
    console.log(result)
})