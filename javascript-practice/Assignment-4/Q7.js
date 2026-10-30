document.body.innerHTML = `
    <h2>Login Form</h2>

    <form id="loginForm">

        <label>Email:</label><br>
        <input type="text" id="email">
        <p id="emailError" style="color:red;"></p>

        <label>Password:</label><br>
        <input type="password" id="password">
        <p id="passwordError" style="color:red;"></p>

        <button type="submit">Login</button>

    </form>

    <p id="message"></p>
`;

const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let email = emailInput.value.trim();
    let password = passwordInput.value;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;

    let validEmail = emailPattern.test(email);
    let validPassword = passwordPattern.test(password);

    if (!validEmail) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email.";
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (!validPassword) {
        document.getElementById("passwordError").textContent =
            "Password must have 8 characters, uppercase, lowercase, number and special character.";
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    if (validEmail && validPassword) {
        document.getElementById("message").textContent =
            "Login Successful!";

        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").textContent =
            "Please correct the errors.";

        document.getElementById("message").style.color = "red";
    }
});
