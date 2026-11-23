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
  
}
