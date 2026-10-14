
 // Q3. Monthly Expense Tracker

// Store monthly expenses in an array
let expenses = [3000, 1500, 6000, 2000, 1000];

// Calculate the total expenses
let total = 0;

for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
}

// Calculate average expense
let average = total / expenses.length;

// Calculate 10% tax
let tax = total * 10 / 100;

// Add tax to the total
let finalAmount = total;
finalAmount += tax;

// Display the results
console.log("Total Expenses: Rs. " + total.toFixed(2));
console.log("Average Expense: Rs. " + average.toFixed(2));
console.log("Tax (10%): Rs. " + tax.toFixed(2));
console.log("Final Amount after Tax: Rs. " + finalAmount.toFixed(2));
