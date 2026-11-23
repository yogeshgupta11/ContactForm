let editIndex = null;
window.addEventListener("DOMContentLoaded", () => {
  let data = localStorage.getItem("data");
  let dataObject = JSON.parse(data);

  let datalist = document.getElementById("datalist");
  dataObject.forEach((item, index) => {
    let row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.NAME}</td>
      <td>${item.PHONENUMBER}</td>
      <td>${item.EMAIL}</td>
      <td>${item.SUBJECT}</td>
      <td>${item.DESCRIPTION}</td>
      <td class ="managebtn">
      <button class ="edit"> Edit</button>
      <button class ="delete"> Delete</button>
      </td>
      `;
    let editbtn = row.querySelector(".edit");
    let deletebtn = row.querySelector(".delete");

    editbtn.addEventListener("click", () => {
      editIndex = index;
      POPUP.style.display = "block";

      username.value = item.NAME;
      number.value = item.PHONENUMBER;
      email.value = item.EMAIL;
      subject.value = item.SUBJECT;
      discription.value = item.DESCRIPTION;
    });
    deletebtn.addEventListener("click", () => {
      dataObject.splice(index, 1);
      localStorage.setItem("data", JSON.stringify(dataObject));
      row.remove();
    });
    datalist.appendChild(row);
  });

  let listbtn = document.getElementById("btn");
  let POPUP = document.getElementById("POPUP");
  listbtn.addEventListener("click", () => {
    POPUP.style.display = "block";
  });
  let canclebtn = document.getElementById("canclebtn");
  canclebtn.addEventListener("click", () => {
    POPUP.style.display = "none";
  });
  let headingbtn = document.getElementById("headingbtn");
  headingbtn.addEventListener("click", () => {
    POPUP.style.display = "none";
  });
});
