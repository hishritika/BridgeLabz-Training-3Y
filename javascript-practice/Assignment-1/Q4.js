
 // Q4. Academic Performance Evaluator

// Store marks of 5 subjects (each out of 100)
let marks = [90, 85, 78, 88, 92];

// Calculate total marks
let total = 0;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}

// Calculate average and percentage
let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

// Check whether any subject has marks below 35
let isFailed = false;

for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 35) {
        isFailed = true;
    }
}

// Display marks and result
console.log("Total Marks: " + total);
console.log("Average Marks: " + average.toFixed(2));
console.log("Overall Percentage: " + percentage.toFixed(2) + "%");

if (isFailed || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}
