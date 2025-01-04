const myForm = document.getElementById("myForm")
function makeAdd(event){
    event.preventDefault();

    const firstname = document.getElementById("fname").value;
    const lastname = document.getElementById("lname").value;
    const age = document.getElementById("age").value;
    const Id = document.getElementById("Fid").value;
    const heigth = document.getElementById("heigth").value;
    const describeSelf = document.getElementById("describe").value;
    const mail = document.getElementById("mail").value;
    const button = document.getElementById("btn")

    const li = document.createElement("li");
    const ul = document.getElementById("myUl");

    ul.appendChild(li)


    li.innerHTML = `
        <strong>სახელი:</strong> ${firstname} <br>
        <strong>გვარი:</strong> ${lastname} <br>
        <strong>ასაკი:</strong> ${age} <br>
        <strong>ID:</strong> ${Id} <br>
        <strong>სიმაღლე:</strong> ${heigth} <br>
        <strong>აღწერა:</strong> ${describeSelf} <br>
        <strong>ემაილი:</strong> ${mail} <br>
    `

    if(firstname == "") {
        li.innerHTML = `
        <strong>სახელი:</strong> სახელი არ არის შეყვანილი! <br>
    `
    } else if(lastname == "") {
        li.innerHTML = `
        <strong>გვარი:</strong> გვარი არ არის შეყვანილი! <br>
        `
    } else if(age == "") {
        li.innerHTML = `
        <strong>ასაკი:</strong> ასაკი არ არის შეყვანილი! <br>
        `
    } else if(Id == "") {
        li.innerHTML = `
        <strong>ID:</strong> Id არ არის შეყვანილი! <br>
        `
    } else if(heigth == "") {
        li.innerHTML = `
        <strong>სიმაღლე:</strong> სიმაღლე არ არის შეყვანილი! <br>
        `
    } else if(describeSelf == "") {
        li.innerHTML = `
        <strong>აღწერა:</strong> აღწერა არ არის შეყვანილი! <br>
        `
    } else if(mail == "") {
        li.innerHTML = `
        <strong>ემაილი:</strong> ემაილი არ არის შეყვანილი <br>
        `
    }


}
makeAdd()