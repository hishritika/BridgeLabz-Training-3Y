
 // Q7. Smart Guessing Game (Number Range)

// Generate a random secret number between 1 and 50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Store the user's guess
let userGuess = 25;

// Display the secret number for testing
console.log("Secret Number: " + secretNumber);
console.log("Your Guess: " + userGuess);

// Check the guess
if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // Calculate the difference between the numbers
    let difference = Math.abs(userGuess - secretNumber);

    if (difference <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}
