// console.dir(document);
// const domainName = document.domain;
// console.log(domainName);


// console.log(document.URL);
// console.log(document.title);

// document.title = "Mayur";

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// document.all[15].textContent = "My Personal Items";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


// Hand on DOM Elements using getElementbyId

// console.log(document.getElementById("items"));
// const mainTitle = document.getElementById("header-title");
// console.log(mainTitle);

// mainTitle.textContent = "Hello World";
// mainTitle.innerText = "Good Bye";

// console.log(mainTitle.innerText);

// mainTitle.innerHTML = "<h3> Welcome Mayur </h3>";

// mainTitle.style.borderBottom = "solid 3px #000"

// const title = document.getElementsByClassName("title");

// const heading = title[0];

// heading.style.fontWeight = "bold";
// heading.style.color = "green";

// const items = document.getElementsByClassName("list-group-item");

// console.log(items);

// items[1].textContent = "Mayur";
// items[1].style.backgroundColor = "yellow";

// for (let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#F4F4F4';
//     items[i].style.fontWeight = "bold";
// }


// GetElementsbyTAgName and GetElementsByClassName

const item = document.getElementsByClassName("custom-list-group");
item[0].textContent = "Added New Element";
item[0].style.backgroundColor = "red";
item[0].style.fontWeight = "bold";


const items = document.getElementsByTagName("li");

items[4].textContent = "Item 5";
items[4].style.backgroundColor = "green";
items[4].style.fontWeight = "bold";



