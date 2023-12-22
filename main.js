const myform = document.getElementById("my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const appointmentsList = document.getElementById("Appointments");

const Getappointment = document.getElementById("getappointment");

const axiosinstance = new axios.create({
  baseURL: `https://crudcrud.com/api/bf69353205fe4360b217c66e59f2c3c5`,
});

axiosinstance
  .get(`/appointments`)
  .then((res) =>
    res.data.map((record) => {
      showOutPut(record);
    })
  )
  .catch((error) => {
    document.body.innerHTML =
      document.body.innerHTML + "<h4> Not Able to fetch the data</h4>";
    console.log(error);
  });

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
    currentvalue.name = nameInput.value;
    currentvalue.email = emailInput.value;
    nameInput.value = "";
    emailInput.value = "";
  }

  axiosinstance
    .post("/appointments", currentvalue)
    .then((res) => showOutPut(res.data))
    .catch((error) => {
      document.body.innerHTML =
        document.body.innerHTML + "<h4> Something went wrong</h4>";
      console.log(error);
    });
};

myform.addEventListener("submit", onSubmit);

const deleteitems = (e) => {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure want to exit")) {
      const li = e.target.parentElement;
      const data = li.textContent;
      const emailMatch = data.match(/: (.+)$/);
      let email = emailMatch[1];
      appointmentsList.removeChild(li);
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
      appointmentsList.removeChild(li);
      localStorage.removeItem(email);
    }
  }
  nameInput.value = name;
  emailInput.value = email;
};

const showOutPut = (currentval) => {
  const li = document.createElement("li");
  const delebutton = document.createElement("button");
  const editButton = document.createElement("button");
  delebutton.className = "btn btn-danger btn-sm float-right delete";
  editButton.className = "btn btn-primary btn-sm float-right custom-action";
  delebutton.appendChild(document.createTextNode("X"));
  editButton.appendChild(document.createTextNode("Edit"));
  li.appendChild(
    document.createTextNode(`${currentval.name}: ${currentval.email}`)
  );
  li.appendChild(delebutton);
  li.appendChild(editButton);
  li.className = "item";
  appointmentsList.appendChild(li);
};

const getallappointments = () => {
  axiosinstance
    .get(`/appointments`)
    .then((res) =>
      res.data.map((record) => {
        showOutPut(record);
      })
    )
    .catch((error) => {
      document.body.innerHTML =
        document.body.innerHTML + "<h4> Not Able to fetch the data</h4>";
      console.log(error);
    });
};
appointmentsList.addEventListener("click", deleteitems);
appointmentsList.addEventListener("click", editButton);
Getappointment.addEventListener("click", getallappointments);
