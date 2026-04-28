document.getElementById("patientForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let condition = document.getElementById("condition").value;

    let patient = {
        name: name,
        age: age,
        condition: condition
    };

    let patients = JSON.parse(localStorage.getItem("patients")) || [];

    patients.push(patient);

    localStorage.setItem("patients", JSON.stringify(patients));

    document.getElementById("patientForm").reset();

    displayPatients();
});


function displayPatients() {
    let patients = JSON.parse(localStorage.getItem("patients")) || [];

    let table = document.getElementById("patientTable");

    table.innerHTML = "";

    patients.forEach(function(patient) {
        let row = `
            <tr>
                <td>${patient.name}</td>
                <td>${patient.age}</td>
                <td>${patient.condition}</td>
                <td><button onclick="deletePatient('${patient.name}')">Delete</button></td>
            </tr>
        `;

        table.innerHTML += row;
    });
}


function deletePatient(name) {
    let patients = JSON.parse(localStorage.getItem("patients")) || [];

    patients = patients.filter(p => p.name !== name);

    localStorage.setItem("patients", JSON.stringify(patients));

    displayPatients();
}


// load when page opens
window.onload = function() {
    displayPatients();
};
