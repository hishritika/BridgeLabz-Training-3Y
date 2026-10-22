
/* Q2: String Manipulation Report */

let productName = "  wireless headphones PRO  ";

let cleanedName = productName.trim().toLowerCase();

let words = cleanedName.split(" ");

let capitalizedWords = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
});

let formattedTitle = capitalizedWords.join(" ");

let finalTitle = formattedTitle.replace("Pro", "Pro Edition");

console.log("Original Product Name:", productName);
console.log("Formatted Product Title:", finalTitle);
console.log("Title Length:", finalTitle.length);
