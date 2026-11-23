let username = document.getElementById("name");
let number = document.getElementById("number");
let email = document.getElementById("Email");
let submitbtn = document.getElementById("submitbtn");

submitbtn.addEventListener("click", () => {
  if (ValidateForm()) {
    setData();
  }
});

function ValidateForm() {
  ValidateUserName();
  ValidateUserNumber();
  ValidateUserEmail();

  if (
    document.getElementById("NAMEERROR").innerText !== "" ||
    document.getElementById("PHONEERROR").innerText !== "" ||
    document.getElementById("emailError").innerText !== ""
  ) {
    return false;
  } else {
    return true;
  }
}

function ValidateUserName() {
  if (/[^a-zA-Z ]/.test(username.value)) {
    document.getElementById("NAMEERROR").innerText = "Use only letters.";
  } else {
    document.getElementById("NAMEERROR").innerText = "";
  }
}
username.addEventListener("input", () => {
  ValidateUserName();
});

function ValidateUserNumber() {
  if (number.value === "") {
    document.getElementById("PHONEERROR").innerText = "";
  } else if (/[^0-9]/.test(number.value)) {
    document.getElementById("PHONEERROR").innerText = "Use only numbers.";
  } else if (number.value.length < 10) {
    document.getElementById("PHONEERROR").innerText = "Use atlest 10 number";
  } else {
    document.getElementById("PHONEERROR").innerText = "";
  }
}
number.addEventListener("input", () => {
  ValidateUserNumber();
});

function ValidateUserEmail() {
  if (email.value === "") {
    document.getElementById("emailError").innerText = "";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    document.getElementById("emailError").innerText =
      "Enter valid email address.";
  } else {
    document.getElementById("emailError").innerText = "";
  }
}
email.addEventListener("input", () => {
  ValidateUserEmail();
});
