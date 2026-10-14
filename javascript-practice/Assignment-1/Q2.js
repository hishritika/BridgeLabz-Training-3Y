
 // Q2. Multi-Type Data Summary

// Declare variables of different data types
let userName = "Shritika";
let age = 18;
let isStudent = true;
let subjects = ["JavaScript", "HTML", "CSS"];
let user = { name: "Shritika", age: 18 };
let address = null;
let phoneNumber;

// Identify the data types
let nameType = typeof userName;
let ageType = typeof age;
let studentType = typeof isStudent;
let subjectsType = Array.isArray(subjects) ? "array" : typeof subjects;
let userType = typeof user;
let addressType = address === null ? "null" : typeof address;
let phoneType = typeof phoneNumber;

// Display the data in a formatted table
console.table([
    { Label: "User Name", Value: userName, Type: nameType },
    { Label: "Age", Value: age, Type: ageType },
    { Label: "Is Student", Value: isStudent, Type: studentType },
    { Label: "Subjects", Value: subjects, Type: subjectsType },
    { Label: "User Object", Value: user, Type: userType },
    { Label: "Address", Value: address, Type: addressType },
    { Label: "Phone Number", Value: phoneNumber, Type: phoneType }
]);
