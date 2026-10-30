document.body.innerHTML = `
    <h2>Student Registration Form</h2>

    <form id="studentForm">

        <label>Name:</label><br>
        <input type="text" id="name"><br>
        <small id="nameError"></small><br><br>

        <label>Email:</label><br>
        <input type="text" id="email"><br>
        <small id="emailError"></small><br><br>

        <label>Phone:</label><br>
        <input type="text" id="phone"><br>
        <small id="phoneError"></small><br><br>

        <label>Password:</label><br>
        <input type="password" id="password"><br>
        <small id="passwordError"></small><br><br>

        <button type="submit">Register</button>

    </form>
`;

const studentForm = document.getElementById("studentForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

function checkInput(input, errorId, isValid, message) {
    const errorElement = document.getElementById(errorId);

    if (isValid) {
        input.style.border = "2px solid green";
        errorElement.textContent = "";
    } else {
        input.style.border = "2px solid red";
        errorElement.textContent = message;
        errorElement.style.color = "red";
    }
}


studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const namePattern = /^[A-Za-z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).+$/;

    const validName = namePattern.test(nameInput.value);
    const validEmail = emailPattern.test(emailInput.value);
    const validPhone = phonePattern.test(phoneInput.value);
    const validPassword = passwordPattern.test(passwordInput.value);

    checkInput(nameInput, "nameError", validName, "Name should contain only alphabets.");
    checkInput(emailInput, "emailError", validEmail, "Enter a valid email.");
    checkInput(phoneInput, "phoneError", validPhone, "Phone must contain exactly 10 digits.");
    checkInput(passwordInput, "passwordError", validPassword, "Password must contain an uppercase letter, a number and a special character.");

    if (validName && validEmail && validPhone && validPassword) {
        alert("Registration Successful!");
    }
});
