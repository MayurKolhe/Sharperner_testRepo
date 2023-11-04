const myform = document.getElementById("my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

const onSubmit = (e) => {
  e.preventDefault();
    let currentvalue = {
        name: "",
        email: ""
  };
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
      currentvalue.name = nameInput.value;
      currentvalue.email = emailInput.value;
    nameInput.value = "";
    emailInput.value = "";
  }   
  
  if (localStorage.getItem(currentvalue.email)) {
    let current = localStorage.getItem(currentvalue.email);
    current = current + ", " + JSON.stringify(currentvalue);
    localStorage.setItem(currentvalue.email, current);
  } else {
    localStorage.setItem(currentvalue.email, JSON.stringify(currentvalue));
  }
};

myform.addEventListener("submit", onSubmit);
