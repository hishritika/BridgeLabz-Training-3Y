
/* Q7: Customer Feedback Processor */

// Store the customer feedback
let feedback = "Great product! Fast delivery and amazing sound quality!";

// Convert feedback to lowercase
let cleanedFeedback = feedback.toLowerCase();

// Count the total number of words
let words = feedback.trim().split(/\s+/);
let wordCount = words.length;

// Check for negative words
let hasBadWord = cleanedFeedback.includes("bad");
let hasPoorWord = cleanedFeedback.includes("poor");

// Display feedback details
console.log("Customer Feedback:", feedback);
console.log("Total Words:", wordCount);

// Check feedback sentiment using conditions
if (!hasBadWord && !hasPoorWord) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
