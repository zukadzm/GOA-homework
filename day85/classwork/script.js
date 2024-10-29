// const myDiv = document.getElementById("divv");

// myDiv.innerHTML += `
//   <p>Hello</p>
//   <p>Hello2</p>
//   <p>Hell3</p>
//   <button>Clickme</button>
//   <h1>Hello again</h1>
// `


// const myList = document.querySelector("ul");

// const pt = document.createElement("Python");
// const cc = document.createElement("c#");
// const cs = document.createElement("css");

// myList.appendChild(pt);
// myList.appendChild(cc);
// myList.appendChild(cs);


const button = document.getElementById("btn");
const table = document.querySelector("table");
const reset = document.getElementById("rst");



button.addEventListener("click",function(){
    
    const firstname = document.getElementById("fname");
    const lastname = document.getElementById("surname");
    const mail = document.getElementById("mail");

    firstname.appendChild(table);
    lastname.appendChild(table);
    mail.appendChild(mail)
})

reset.addEventListener("click",function(){
    table = ""
})
