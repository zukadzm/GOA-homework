const myForm = document.getElementById("Myform");
const button = document.getElementById("btn");
const result = document.getElementById("result")

function getAllElements(){
    const firstName = document.getElementById("namme").value;
    const email = document.getElementById("emall").value;
    const age = document.getElementById("agee").value;
    const CreatePassword = document.getElementById("createPassword").value;
    const RepeatPassword = document.getElementById("repeatPassword").value;

    const names = ["zuka"]


    if(firstName != names) {
        result.textContent = "არასწორია სახელი"
        return false
    } else if(firstName == names) {
        result.textContent = "სწორია"
        return true
    }

    if(age < 18) {
       result.textContent = "არასწორია შენ პატარა ხარ"
    } else if(age => 18) {
        alert("სწორია")
    }

    if(CreatePassword != RepeatPassword) {
        result.textContent = "პაროლს იმეორებ არასწორად"
        return false
    } else if(CreatePassword == RepeatPassword) {
        result.textContent = "სწორია პაროლის განმეორება"
        alert(`Hello ${firstName},${surname}`)
        window.location.href = "about.html" // აქ სიტყვაზე მეორე საიტზე გადაგიშვას
        return true
    }
};