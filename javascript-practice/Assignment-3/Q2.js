const employeeName = "Rahul";
let salary = 30000;
let performanceRating = 4;

// Calculate bonus based on performance
let bonus = 0;

if (performanceRating >= 5) {
    bonus = salary * 0.20;
} else if (performanceRating >= 4) {
    bonus = salary * 0.10;
} else if (performanceRating >= 3) {
    bonus = salary * 0.05;
} else {
    bonus = 0;
}

// Calculate final salary
let finalSalary = salary + bonus;

// Display employee details
console.log("Employee Name:", employeeName);
console.log("Original Salary:", salary);
console.log("Performance Rating:", performanceRating);
console.log("Bonus:", bonus);
console.log("Final Salary:", finalSalary);
