const input = document.getElementById("inputtext").value;
const p = document.getElementById("result");

const buttonAdd = document.getElementById("addButton");
const buttonRemove = document.getElementById("addRemove");
const reset = document.getElementById("reset");

let count = 0;

function counterUpdt() {
    input.textContent = count
}
buttonAdd.addEventListener("click",function(event){
    alert(count)
    if(input == 0) {
        alert("შეიყვანე რაიმე")
    }

    count += input
    counterUpdt()
})

buttonRemove.addEventListener("click",function(event2){
    input-input
    input.textContent = count
    alert(count)
    if(input == 0) {
        alert("შეიყვანე რაიმე")
    }

    count -= input
})

reset.addEventListener("click",function(event3){
    count = 0
    input.textContent = count
    alert(count)
    if(input == 0) {
        alert("შეიყვანე რაიმე")
    }
    count = 0
    counterUpdt()
})

// ) შევქმნათ ქაუნთერი ნომერი 2, რომელსაც ასევე ექნება სამი ღილაკი და ერთი ინფუთი, ამ ინფუთში შეყვანილი რიცხვის მიხედვით გადაწყდება რა დაემატება ან გამოაკლდება ქაუნთერს, ასევე დაამატეთ ალერტი რომელიც აფრთხილებს მომხმარებელს თუ უკვე 0-ზე არიან მეტჯერ დარესტარდება არ შეიძლება, არ შეიძლება 100-ზე მეტი რიცხვის მიმატება ან გამოკლება