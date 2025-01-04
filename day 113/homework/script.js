const input = document.getElementById("inputText").value;
const button = document.getElementById("btn");
const p = document.getElementById("p")

all = ["PHG1234","PHT35f3"]

function makeAll(){
    button.addEventListener("click",function(e){
        e.preventDefault()
        if(input == all [0] || [1]) {
            p.textContent = input
        } else if(input !== all [0] || [1]) {
            p.textContent = "ERROR"
        }
    })
}