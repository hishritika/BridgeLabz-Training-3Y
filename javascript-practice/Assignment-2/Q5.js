
/* Q5: Boolean Logic Access System */

// Define user access details
let isAuthenticated = true;
let isAdmin = false;
let isAccountActive = true;
let loginAttempts = 2;
let maxLoginAttempts = 3;

// Check whether the user is allowed to access the system
let hasValidAccess =
    isAuthenticated &&
    isAccountActive &&
    loginAttempts < maxLoginAttempts;

// Check whether the user has administrative access
let hasAdminAccess = hasValidAccess && isAdmin;

// Display access results
console.log("Authenticated:", isAuthenticated);
console.log("Account Active:", isAccountActive);
console.log("Login Attempts:", loginAttempts);
console.log("Valid Access:", hasValidAccess);
console.log("Admin Access:", hasAdminAccess);

// Display the final access decision
if (hasAdminAccess) {
    console.log("Access Granted: Admin");
} else if (hasValidAccess) {
    console.log("Access Granted: Regular User");
} else {
    console.log("Access Denied");
}
