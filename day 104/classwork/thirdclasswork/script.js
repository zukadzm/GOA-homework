const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const p = document.getElementById("result");
const reset = document.getElementById("reset");

let count = 0;

addButton.addEventListener("click",function(){
    count++;
    p.textContent = count;
})

removeButton.addEventListener("click",function(){
    count--;
    p.textContent = count;
})

reset.addEventListener("click",function(){
    count = 0;
    p.textContent = count
})
