
document.body.innerHTML = `
    <h2>Movie Ticket Booking</h2>

    <form id="bookingForm">
        <label>Name:</label><br>
        <input type="text" id="name"><br><br>

        <label>Email:</label><br>
        <input type="text" id="email"><br><br>

        <label>Seats (1 to 10):</label><br>
        <input type="number" id="seats"><br><br>

        <button type="submit">Book Ticket</button>
    </form>

    <p id="message"></p>
    <div id="ticket"></div>
`;

const bookingForm = document.getElementById("bookingForm");
const message = document.getElementById("message");
const ticket = document.getElementById("ticket");

// Form submission
bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let seats = Number(document.getElementById("seats").value);

    // Regular expressions
    let namePattern = /^[A-Za-z ]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!namePattern.test(name)) {
        message.textContent = "Name should contain only alphabets.";
        ticket.innerHTML = "";
        return;
    }

    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email.";
        ticket.innerHTML = "";
        return;
    }

    if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        message.textContent = "Seats must be between 1 and 10.";
        ticket.innerHTML = "";
        return;
    }

    const booking = {
        name: name,
        email: email,
        seats: seats
    };

    message.textContent = "Booking successful!";

    ticket.innerHTML = `
        <h3>Ticket Details</h3>
        <p>Name: ${booking.name}</p>
        <p>Email: ${booking.email}</p>
        <p>Seats: ${booking.seats}</p>
    `;

    console.log(booking);
});
