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
    delebutton.className = "btn btn-danger btn-sm float-right delete";
    delebutton.appendChild(document.createTextNode("X"));
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
    );
    li.appendChild(delebutton);
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
        let email = emailMatch[1]
        userList.removeChild(li);
        let key = emailMatch[1].substring(0, email.length-1);
        console.log(key);
       
        localStorage.removeItem(key);
    }
  }
};

userList.addEventListener("click", deleteitems);

// for (let i = 0; i < userList.length; i++) {
//   const delebutton = document.createElement("button");
//   delebutton.className = "btn btn-danger btn-sm float-right delete";
//   delebutton.appendChild(document.createTextNode("X"));
//   userList[i].appendChild(delebutton);
// }
