
 // Q6. Progressive Discount System

// Store the total purchase amount
let total = 7500;

// Initialize discount percentage
let discountPercentage = 0;

// Apply discount according to purchase amount
if (total >= 10000) {
    discountPercentage = 25;
} else if (total >= 5000) {
    discountPercentage = 15;
} else if (total >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

// Calculate discount amount
let discountAmount = total * discountPercentage / 100;

// Calculate final price after discount
let finalPrice = total - discountAmount;

// Round the final price
finalPrice = Math.round(finalPrice);

// Display the results
console.log("Original Total: Rs. " + total);
console.log("Discount Percentage: " + discountPercentage + "%");
console.log("Final Price after Discount: Rs. " + finalPrice);
