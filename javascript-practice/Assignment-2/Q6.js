
/* Q6: Event-Based Counter Simulation */

// Initialize the counter
let count = 0;

// Function to increase the counter
function increment() {
    count++;
    console.log("Counter after increment:", count);
}

// Function to decrease the counter
function decrement() {
    count--;
    console.log("Counter after decrement:", count);
}

// Nested function to demonstrate scope
function counterDemo() {
    function showCount() {
        console.log("Current count inside nested function:", count);
    }

    showCount();
}

// Simulate click events by calling functions manually
console.log("Initial Count:", count);

increment();
increment();
decrement();

counterDemo();

// Display the final counter value
console.log("Final Count:", count);
