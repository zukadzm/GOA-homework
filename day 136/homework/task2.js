//  ააგეთ საიტი სადაც გექნებათ ონლაინ მაღაზია, ჯერ მომხმარებელი უნდა დარეგისტრირდეს, მონაცემები უნდა შეინახოს LocalStorage-ში, თუ რეგისტრაცია წარმატებული იქნება მაშინ მომხმარებელი უნდა გადაიყვანოს მაღაზიის გვერდზე სადაც იქნება განლაგებული პროდუქტები, ასევე მომხმარებელს უნდა შეეძლოს რომ დაამატოს პროდუქტები Cart-ში. optional: მომხმარებელს უნდა შეეძლოს, რომ1 კლიკით იყიდოს ყველა პროდუქტი ან წაშალოს Cart-იდან. <3

const myForm = document.getElementById("Myform");
const button = document.getElementById("btn");

function getAllElements(){
    const firstName = document.getElementById("namme").value;
    const surname = document.getElementById("surname").value;
    const CreatePassword = document.getElementById("createPassword").value;
    const RepeatPassword = document.getElementById("repeatPassword").value;

    
    if(firstName == "") {
        alert("შესაყვანი ველი არ შეიძლება იყოს ცარიელი!")
    } else if(surname == "") {
        alert("შესაყვანი ველი არ შეიძლება იყოს ცარიელი!")
    } else if(CreatePassword == "") {
        alert("შესაყვანი ველი არ შეიძლება იყოს ცარიელი!")
        return false
    } else if(CreatePassword != RepeatPassword) {
        alert("არასწორია გთხოვთ პაროლი გაიმეორეთ სწორად!")
        return false
    } else if(CreatePassword == RepeatPassword) {
        localStorage.setItem("firstname", firstName);
        localStorage.setItem("surname", surname)
        localStorage.setItem("password", CreatePassword)
        alert("რეგისტრაციამ წარმატებით ჩაიარა")
        alert(`Hello ${firstName},${surname}`)
        window.location.href = "task2.html" 
        return true
    }
};