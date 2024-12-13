const buttonAdd = document.getElementById("addButton");
const buttonRemove = document.getElementById("addRemove");
const p = document.getElementById("res");
const reset = document.getElementById("reset");

let count = 0;

function checkPosDev(){
    if(p < 0) {
        p.style.color = "red"
    } else if(p > 0) {
        p.style.color = "green"
    }
}
checkPosDev()

buttonAdd.addEventListener("click",function(){
    count++;
    p.textContent = count
})

buttonRemove.addEventListener("click",function(){
    count--;
    p.textContent = count
})

reset.addEventListener("click",function(){
    count = 0
    p.textContent = count
})