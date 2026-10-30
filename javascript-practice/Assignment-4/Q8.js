let user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

document.body.innerHTML = `
    <h2>Dynamic Object Updater</h2>

    <form id="userForm">
        <label>Name:</label>
        <input type="text" id="name" value="${user.name}">
        <br><br>

        <label>Email:</label>
        <input type="email" id="email" value="${user.email}">
        <br><br>

        <label>Age:</label>
        <input type="number" id="age" value="${user.age}">
        <br><br>

        <button type="submit">Update User</button>
    </form>

    <h3>Updated User Details:</h3>
    <div id="output"></div>
`;

let form = document.getElementById("userForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = Number(document.getElementById("age").value);

    document.getElementById("output").innerHTML = `
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        <p>Age: ${user.age}</p>
    `;
});
