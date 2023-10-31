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

// const item = document.getElementsByClassName("custom-list-group");
// item[0].textContent = "Added New Element";
// item[0].style.backgroundColor = "red";
// item[0].style.fontWeight = "bold";


// const items = document.getElementsByTagName("li");

// items[4].textContent = "Item 5";
// items[4].style.backgroundColor = "green";
// items[4].style.fontWeight = "bold";

// ////////////////////////////////////////////////////////////////////////////////////

// QuerySelector;

    // const item2 = document.querySelector(".list-group-item:nth-child(2)");

    // item2.style.backgroundColor = "green";

    // const item3 = document.querySelector(".list-group-item:nth-child(3)");

    // item3.style.display = "none";


// QuerySelectorAll;

// const item = document.querySelectorAll("li:nth-child(2)");

// item[0].style.color = "green";


// const odd = document.querySelectorAll('li:nth-child(odd)');

// for (let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = "green";
// }


let itemlist = document.querySelector('#items');
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemlist. parentNode. parentNode. parentNode);
// parentElement
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundcolor = '#f4f4f4';
// console.log(itemlist.parentElement. parentElement.parentElement)

// childNodes
// console.log(itemlist.childNodes);

// childNodes
// console.log(itemlist.childNodes);
// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor = 'yellow';

// Firstchild
// console.log(itemlist.firstchild);
// firstElementChild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'Hello 1';

// lastChild
// console.log(itemlist.lastChild);
// lastElementChild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'Hello 4';

// nextSiblings
// console.log(itemlist.nextSibling);
// lastElementChild
// console.log(itemlist.nextElementSibling);


// previousSiblings
// console.log(itemlist.previousSibling);
// lastElementChild
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color = "green";



let newDiv = document.createElement('div');
// Add class
newDiv.className = 'hello';
// Add id
newDiv.id = 'helloworld';
// Add attr
newDiv.setAttribute('title', 'Hello Div');
// Create text node
let newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

let head = document.querySelector('header .container');
let headtext = document.querySelector('header h1');

newDiv.style.fontSize = "30px";

head.insertBefore(newDiv, headtext);
// console.log(newDiv);

let newli = document.createElement('li');

newli.className = "list-group-item";

let newliText = document.createTextNode('Hello World');

newli.appendChild(newliText);

console.log(newli);

let container = document.querySelector(".list-group");
let firstele = document.querySelector(".list-group-item:nth-child(1)");

container.insertBefore(newli , firstele);




