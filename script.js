// SAVE data when you click submit
document.getElementById("patientForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;

    let patient = {
        name: name,
        id: id
    };

    localStorage.setItem("patientData", JSON.stringify(patient));

    alert("Saved!");
});


// LOAD data when page opens
window.onload = function() {
    let saved = localStorage.getItem("patientData");

    if (saved) {
        let patient = JSON.parse(saved);

        document.getElementById("name").value = patient.name;
        document.getElementById("id").value = patient.id;
    }
};
