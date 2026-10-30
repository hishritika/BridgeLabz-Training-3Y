class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm() {
        let formHTML = "<h2>Registration Form</h2>";
        formHTML += '<form id="myForm">';

        for (let field of this.fields) {
            formHTML += `
                <label>${field.label}</label><br>
                <input type="${field.type}" name="${field.label}" required>
                <br><br>
            `;
        }

        formHTML += '<button type="submit">Submit</button>';
        formHTML += "</form>";

        document.body.innerHTML = formHTML;

        document.getElementById("myForm").addEventListener("submit", (event) => {
            event.preventDefault();

            let formData = this.getFormData();
            console.log("Form Data:", formData);
        });
    }

    getFormData() {
        let formData = {};
        let inputs = document.querySelectorAll("#myForm input");

        for (let input of inputs) {
            formData[input.name] = input.value;
        }

        return formData;
    }
}

const fields = [
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" }
];

const myForm = new FormBuilder(fields);
myForm.createForm();
