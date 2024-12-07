//  გააკეთეთ თითოეულ ნასწავლ მეთოდზე (.createElement, .appendChild(node), .insertBefore, .removeChild(node), .parentNode, .replaceChild) 5-5 მაგალითი, ახსენით თითოეულის მუშაობა კომენტარებით

const newP = document.createElement("p");
const newButton = document.createElement("button");
const newH1 = document.createElement("h1");
const newH2 = document.createElement("h2");
const table = document.createElement("table");

table.appendChild(newP);
table.appendChild(newButton);
table.appendChild(newH1);
table.appendChild(newH2);
table.appendChild(table);

newP.insertBefore(newH1);
newButton.insertBefore(newH2);
newH2.insertBefore(table)
table.insertBefore(newP);
newH2.insertBefore(newButton);

newP.removeChild(newH1);
newH1.removeChild(newH2)
newH2.removeChild(newP);
newButton.removeChild(newH2);
table.removeChild(newP);

table.parentNode(newP);
newH1.parentNode(newH2);
newH2.parentNode(newButton);
newP.parentNode(table);
table.parentNode(newH1);

table.replaceChild(newP);
newH1.replaceChild(newH2);
newButton.replaceChild(newButton);
newH2.replaceChild(newH1);
newP.replaceChild(table);