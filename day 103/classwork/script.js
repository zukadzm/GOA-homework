const p = document.getElementById("result");
const words = document.getElementById("wrds");
const button = document.getElementById("btn");



 button.addEventListener("click",function(e){
    e.preventDefault()
if(words!=/^[a-zA-Z]+$/) {
     p.textContent = "ERROR"
    p.style.color = "red"
}
})

