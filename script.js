const form = document.querySelector("form");
const patientTable = document.getElementById("patientTable");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputs = form.querySelectorAll("input");

  const name = inputs[0].value;
  const age = inputs[1].value;
  const condition = inputs[2].value;

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${condition}</td>
    <td><button onclick="this.parentElement.parentElement.remove()">Delete</button></td>
  `;

  patientTable.appendChild(row);

  form.reset();
});
