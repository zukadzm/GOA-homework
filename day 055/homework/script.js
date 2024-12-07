const p = document.getElementById("result")
const button1 = document.getElementById("btn1")
const button2 = document.getElementById("btn2")
const button3 = document.getElementById("btn3")


let number1 = 0
number = 0
number = 0

button1.addEventListener("click",function(){
    number += 1
    p.textContent = number
})

button2.addEventListener("click",function(){
    number -= 1
    p.textContent = number
})

button3.addEventListener("click",function(){
    number -= number
    p.textContent = number
})