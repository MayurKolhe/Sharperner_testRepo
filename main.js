const myform = document.getElementById("my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.getElementById("users");

const onSubmit = (e) => {
  e.preventDefault();
  let currentvalue = {
    name: "",
    email: "",
  };
  if (nameInput === "" || emailInput === "") {
    msg.classList.add("error");
    msg.innerHTML("All fileds Are required");

    setTimeout(() => msg.remove, 3000);
  } else {
    const li = document.createElement("li");
    const delebutton = document.createElement("button");
    const editButton = document.createElement("button");
    delebutton.className = "btn btn-danger btn-sm float-right delete";
    editButton.className = "btn btn-primary btn-sm float-right custom-action";
    delebutton.appendChild(document.createTextNode("X"));
    editButton.appendChild(document.createTextNode("Edit"));
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
    );
    li.appendChild(delebutton);
    li.appendChild(editButton);
    li.className = "item";
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

const deleteitems = (e) => {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure want to exit")) {
      const li = e.target.parentElement;
      const data = li.textContent;
      const emailMatch = data.match(/: (.+)$/);
      let email = emailMatch[1];
      userList.removeChild(li);
      let key = emailMatch[1].substring(0, email.length - 1);
      localStorage.removeItem(key);
    }
  }
};

const editButton = (e) => {
  e.preventDefault();
  let email = "";
  let name = "";
  if (e.target.classList.contains("custom-action")) {
    if (confirm("Are you sure want to Edit")) {
      const li = e.target.parentElement;
      const data = li.textContent;
      const emailMatch = data.match(/: (.+)$/);
      email = emailMatch[1].replace("Edit", "").replace("X", "");
      console.log(email);
      let key = JSON.parse(localStorage.getItem(email));
      name = key.name;
      userList.removeChild(li);
      localStorage.removeItem(email);
    }
  }
  nameInput.value = name;
  emailInput.value = email;
};


userList.addEventListener("click", deleteitems);
userList.addEventListener("click", editButton);
// for (let i = 0; i < userList.length; i++) {
//   const delebutton = document.createElement("button");
//   delebutton.className = "btn btn-danger btn-sm float-right delete";
//   delebutton.appendChild(document.createTextNode("X"));
//   userList[i].appendChild(delebutton);
// }
