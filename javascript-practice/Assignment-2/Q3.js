
/* Q3: Math Utility Dashboard */

// Store the given number
let x = 16.75;

// Calculate the rounded value
let roundedValue = Math.round(x);

// Calculate the square root
let squareRoot = Math.sqrt(x);

// Calculate the cube of x
let cube = Math.pow(x, 3);

let randomNumber = Math.floor(Math.random() * 41) + 10;

let summary = `
Math Utility Dashboard
Original Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot}
Cube: ${cube}
Random Number (10-50): ${randomNumber}
`;

console.log(summary);
