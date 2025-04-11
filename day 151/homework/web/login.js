const userName = localStorage.getItem("nameInput")
const Useremail = localStorage.getItem("email")
const Userpassword = localStorage.getItem("password")

console.log(userName)
console.log(Useremail)
console.log(Userpassword)

function login(){
    const loginName = document.getElementById("fname").value;
    const loginMail = document.getElementById("loginMail").value;
    const loginPassword = document.getElementById("loginPassword").value

    if(userName == loginName && Useremail == loginMail && Userpassword == loginPassword) {
        alert("LOGIN CONFIRM")

        window.location.href = "index"

        return true
    } else{
        alert("ERROR")
        return false
    }
}