

// Data received from the API
const apiData = ["25", "true", "false", "NaN", "", "100px", "3.14", null, undefined];

// Store valid and invalid numbers
let validNumbers = [];
let invalidNumbers = [];

// Check each value
for (let i = 0; i < apiData.length; i++) {
    let value = apiData[i];

    // Convert the value into different data types
    let num = Number(value);
    let bool = Boolean(value);
    let str = String(value);

    console.log("Original Value:", str);
    console.log("Number:", num);
    console.log("Boolean:", bool);
    console.log("String:", str);

    // Empty strings and invalid numbers are stored separately
    if (typeof value === "string" && value.trim() === "") {
        invalidNumbers.push(value);
        console.log("Invalid number: Empty string");
    } else if (Number.isNaN(num)) {
        invalidNumbers.push(value);
        console.log("Invalid number:", value);
    } else {
        validNumbers.push(num);
        console.log("Valid number:", num);
    }

    console.log("--------------------");
}

// Print the final report
console.log("Valid Numbers:", validNumbers);
console.log("Invalid Values:", invalidNumbers);
console.log("Valid Count:", validNumbers.length);
console.log("Invalid Count:", invalidNumbers.length);
