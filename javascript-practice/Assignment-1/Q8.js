
 // Q8. Employee Salary Projection

// Declare current salary and annual increment rate
let salary = 30000;
let incrementRate = 10;

// Create an array to store yearly salary details
let salaryDetails = [];

// Calculate salary for the next 5 years
for (let year = 1; year <= 5; year++) {
    // Calculate yearly increment
    let increment = salary * incrementRate / 100;

    // Add increment to salary
    salary += increment;

    // Round salary to 2 decimal places
    salary = Math.round(salary * 100) / 100;

    // Store year and salary in the array
    salaryDetails.push({
        Year: year,
        Salary: salary.toFixed(2)
    });
}

// Display yearly salary in a table
console.table(salaryDetails);
