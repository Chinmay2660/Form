function initializeTable() {
  const table = document.querySelector("#data");
  const thead = table.createTHead();
  const row = thead.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
}

window.onload = initializeTable;

document.querySelector("button").addEventListener("click", function (event) {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const dob = document.getElementById("dob").value;
  const address = document.getElementById("address").value;

  const tableBody = document.getElementById("table-body");

  const data = [
    { key: "First Name", value: firstName },
    { key: "Last Name", value: lastName },
    { key: "Email", value: email },
    { key: "Date of Birth", value: dob },
    { key: "Address", value: address },
  ];

  data.forEach(function (item, index) {
    const row = tableBody.insertRow();

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);

    cell1.innerHTML = index + 1;
    cell2.innerHTML = item.key;
    cell3.innerHTML = item.value;
  });

  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("address").value = "";

  document.getElementById("table-container").style.display = "block";
});

function validateForm() {
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const email = document.getElementById("email").value;

  if (firstName.trim() === "") {
    alert("Please enter your First Name");
    return false;
  }

  if (lastName.trim() === "") {
    alert("Please enter your Last Name");
    return false;
  }

  if (email.trim() === "") {
    alert("Please enter your Email");
    return false;
  } else if (!isValidEmail(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  return true;
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
