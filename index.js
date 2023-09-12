document.querySelector("button").addEventListener("click", function (event) {
  event.preventDefault();
  const currentDate = new Date();
  const dobInput = document.getElementById("dob").value;
  const dob = new Date(dobInput);

  if (!validateForm()) {
    return;
  }

  if (!dobInput) {
    alert("Please enter your Date of Birth");
    return;
  }

  if (dob > currentDate) {
    alert("Date of Birth cannot be in the future");
    return;
  }

  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;

  const tableBody = document.getElementById("table-body");

  const data = [
    { key: "First Name", value: firstName },
    { key: "Last Name", value: lastName },
    { key: "Email", value: email },
    { key: "Date of Birth", value: dob.toLocaleDateString() },
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

  clearForm();
  showTable();
});

function validateForm() {
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const dob = document.getElementById("dob").value;
  const address = document.getElementById("address").value;

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

  if (!dob) {
    alert("Please enter your Date of Birth");
    return false;
  }

  if (address.trim() === "") {
    alert("Please enter your Address");
    return false;
  }

  return true;
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function clearForm() {
  const formElements = document.querySelectorAll(".input-text");
  formElements.forEach((element) => (element.value = ""));
}

function showTable() {
  document.getElementById("table-container").style.display = "block";
}
