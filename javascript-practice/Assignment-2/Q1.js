
//Q1: Scope Conflict Resolver 

// Global variable
let bonus = 5000;

// Function to calculate salary
function calculateSalary() {
    // Local variables
    let salary = 40000;
    let isPermanent = true;

    // Add bonus only if the employee is permanent
    if (isPermanent) {
        salary = salary + bonus;
    }

    // Display total salary
    console.log("Permanent Employee:", isPermanent);
    console.log("Total Salary:", salary);
}

// Call the function
calculateSalary();

console.log("Global Bonus:", bonus);
