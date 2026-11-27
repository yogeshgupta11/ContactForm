
async function setData() {
  let NAME = document.getElementById("name");
  let NUMBER = document.getElementById("number");
  let EMAIL = document.getElementById("Email");
  let SUBJECT = document.getElementById("subject");
  let DISCRIPTION = document.getElementById("discription");

  let PopupData = {
    NAME: NAME.value,
    PHONENUMBER: NUMBER.value,
    EMAIL: EMAIL.value,
    SUBJECT: SUBJECT.value,
    DESCRIPTION: DISCRIPTION.value,
  };

  let data = localStorage.getItem("data");
  let dataObject = JSON.parse(data) || [];

  if (editIndex !== null) {
    dataObject[editIndex] = PopupData;
    editIndex = null;
  } else {
    dataObject.unshift(PopupData);
  }

  localStorage.setItem("data", JSON.stringify(dataObject));

  displayData();

  alert("Contact saved successfully!");

  document.querySelector(".CONTAINER").reset();
  document.getElementById("POPUP").style.display = "none";
}
