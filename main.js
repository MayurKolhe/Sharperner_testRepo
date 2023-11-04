const myform = document.getElementById("my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

const onSubmit = (e) => {
  e.preventDefault();
  let currentvalue;
  if (nameInput === "" || emailInput === "") {
    msg.classList.add("error");
    msg.innerHTML("All fileds Are required");

    setTimeout(() => msg.remove, 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
    );
    userList.appendChild(li);
    currentvalue = li.textContent;
    nameInput.value = "";
    emailInput.value = "";
  }
  if (localStorage.getItem("itemlist")) {
    let current = localStorage.getItem("itemlist");
    current = current + ", " + currentvalue;
    localStorage.setItem("itemlist", current);
  } else {
    localStorage.setItem("itemlist", currentvalue);
  }
};

myform.addEventListener("submit", onSubmit);
