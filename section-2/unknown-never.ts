// the Unknown type

// the below throws an error because a value with a fixed type can't be assined to an unknown type.
// "any" type doesn't throw that error.
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max"
// userName = userInput

// the below does not throw an error because TypeScript recognises the if statement.
let userInput2: unknown;
let userName2: string;

userInput2 = 5;
userInput2 = "Max"
if (typeof userInput2 === "string") {
    userName2 = userInput2
}

// any vs unknown
// unknown is better if you know what type will be stored to a variable, 
// but you know what you want to do eventually.
// unknown is better than any because you are not allowed to do everything,
// and you have some sort of checking.




// Never type
function generateError(message: string, code: number) {
    throw {message: message, errorCode: code};
}

generateError("An error occured!", 500)

// a function with an error crashes our script and never returns anything.
// in the console, the console log doesn't return undefined, it doesn't return anything.
// you can define the return type as never to make it really clear.
// a function with an infinite loop also is a never type.