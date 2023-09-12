function addDataToTable() {
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var dateOfBirth = document.getElementById("birthday").value;
  var address = document.getElementById("address").value;

  var tableBody = document.querySelector("#dataTable tbody");

  var newRow = tableBody.insertRow();

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);

  cell1.textContent = firstName;
  cell2.textContent = lastName;
  cell3.textContent = email;
  cell4.textContent = dateOfBirth;
  cell5.textContent = address;

  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("birthday").value = "";
  document.getElementById("address").value = "";
}

document.querySelector("button").addEventListener("click", addDataToTable);
