// const person = {
//     name: "zuka",
//     surname: "qoridze",
// }

// person.name = "gigi";
// person.email = "gigiqoridze@gmail.com";
// person.password = "Paroli123";

// console.log(person)


// function changecolort () {
//     const one = document.getElementById("First").textContent("Zuka")
//     const two = document.getElementById("Second").style.color="White"
// }

const p = document.getElementById("rslt")
const number1 = document.getElementById("first")
const number2 = document.getElementById("second")

let number = 0

number1.addEventListener("click",function(){
    number = number + 1
    p.textContent = number
})

number2.addEventListener("click",function(){
    number = number - 1
    p.textContent = number
})
