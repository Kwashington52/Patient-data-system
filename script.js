document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("patientForm");
    const table = document.getElementById("patientTable");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let condition = document.getElementById("condition").value;

        let patients = JSON.parse(localStorage.getItem("patients")) || [];

        patients.push({ name, age, condition });

        localStorage.setItem("patients", JSON.stringify(patients));

        form.reset();

        renderTable();
    });

    function renderTable() {
        let patients = JSON.parse(localStorage.getItem("patients")) || [];

        table.innerHTML = "";

        patients.forEach((p, index) => {
            table.innerHTML += `
                <tr>
                    <td>${p.name}</td>
                    <td>${p.age}</td>
                    <td>${p.condition}</td>
                    <td><button onclick="deletePatient(${index})">Delete</button></td>
                </tr>
            `;
        });
    }

    window.deletePatient = function (index) {
        let patients = JSON.parse(localStorage.getItem("patients")) || [];

        patients.splice(index, 1);

        localStorage.setItem("patients", JSON.stringify(patients));

        renderTable();
    };

    renderTable();

});
