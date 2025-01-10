const generate = document.getElementById("genert");
const submit = document.getElementById("submitt");
const inputText = document.getElementById("inputText").value;
const p = document.getElementById("pp");
const ul = document.getElementById("ids");

function all(){
    generate.addEventListener("click",function(e){
        e.preventDefault()

        p.textContent = Math.random().toString(31).substring(2, 15);
    })
    submit.addEventListener("click",function(e){
        e.preventDefault()
        li = document.createElement("li")

        ul.appendChild(li)
        
        li.textContent = inputText
    })
}

function localLength(){
    const localstorageLength = `localStorage Length ${localStorage.length}`
    p.textContent = localstorageLength

    for(let i = 0; i < localStorage.length; i++){
        p.textContent = localStorage.key(i)
    }
}

all()
localLength()