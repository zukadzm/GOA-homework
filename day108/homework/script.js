const email = document.getElementById("Email").value;
const country = document.getElementById("country").value;
const button = document.getElementById("btn");
const p = document.getElementById("result");


function allFunction(){
    button.addEventListener("click",function(e){
        e.preventDefault()
        p.textContent = `${email}: შენ მიემგზავრები ${country}: ამდროს ${new Date()} `
    })
}