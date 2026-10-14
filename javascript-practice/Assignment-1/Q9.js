
 // Q9. Random Math Quiz Generator

// Generate two random numbers between 1 and 20
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;

// Select a random arithmetic operator
let operators = ["+", "-", "*", "/"];
let randomIndex = Math.floor(Math.random() * 4);
let operator = operators[randomIndex];

// Variable to store the correct answer
let answer;

// Calculate the answer using switch
switch (operator) {
    case "+":
        answer = num1 + num2;
        break;

    case "-":
        answer = num1 - num2;
        break;

    case "*":
        answer = num1 * num2;
        break;

    case "/":
        answer = num1 / num2;
        break;
}

// Display the question
console.log("Question: " + num1 + " " + operator + " " + num2);

// Display the correct answer
if (operator === "/") {
    console.log("Correct Answer: " + answer.toFixed(2));
} else {
    console.log("Correct Answer: " + answer);
}

