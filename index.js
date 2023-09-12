function addToTable() {
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var dob = document.getElementById("dob").value;
  var address = document.getElementById("address").value;

  var table = document.querySelector("#data");

  var row = table.insertRow();

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  cell1.innerHTML = firstName;
  cell2.innerHTML = lastName;
  cell3.innerHTML = email;
  cell4.innerHTML = dob;
  cell5.innerHTML = address;

  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("address").value = "";
}

document.querySelector("button").addEventListener("click", addToTable);
