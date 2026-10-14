
 // Q10. Citizen Eligibility Validator

// Store age and citizenship status
let age = 19;
let isCitizen = true;

// Check eligibility
if (isCitizen && age >= 18) {
    if (age >= 21) {
        console.log("Eligible for all services.");
    } else {
        console.log("Eligible to vote only.");
    }
} else if (!isCitizen && age >= 18) {
    console.log("Only age criteria met.");
} else {
    console.log("Not eligible yet.");
}
