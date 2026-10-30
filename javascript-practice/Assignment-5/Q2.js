function applyOperation(numbers, operation) {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        result.push(operation(numbers[i]));
    }

    return result;
}

function doubleNumber(number) {
    return number * 2;
}

function squareNumber(number) {
    return number * number;
}

const numbers = [1, 2, 3, 4];

const doubledNumbers = applyOperation(numbers, doubleNumber);
console.log("Doubled numbers:", doubledNumbers);

const squaredNumbers = applyOperation(numbers, squareNumber);
console.log("Squared numbers:", squaredNumbers);
