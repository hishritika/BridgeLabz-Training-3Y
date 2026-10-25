const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;

        case "divide":
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;

        case "power":
            return a ** b;

        case "root":
            if (a < 0) {
                throw new Error("Cannot find square root of a negative number");
            }
            return Math.sqrt(a);

        case "subtract":
            return a - b;

        default:
            throw new Error("InvalidOperationError: Operation not recognized");
    }
}

for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);
        console.log(`${operation}: ${result}`);
    } catch (error) {
        console.log(`${operation}: Error - ${error.message}`);
    }
}

console.log("Calculator Summary");
console.log("Number 1:", num1);
console.log("Number 2:", num2);
console.log("Operations checked:", operations.length);
