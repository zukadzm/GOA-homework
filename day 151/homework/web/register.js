function register(){
    const nameInput = document.getElementById("nameInput").value;
    const emailInput = document.getElementById("emailInput").value;
    const createPassword = document.getElementById("createpasswordINPUT").value;
    const repeatPassword = document.getElementById("repeatPasswordINPUT").value;


        if(nameInput == '' || emailInput == '' || createPassword == '' || repeatPassword == '') {
            alert("PLEASE FILL INPUT")
            return false
        } else if(createPassword !=repeatPassword) {
            alert("Please repeat correctly")
            return false
        } else if(createPassword === repeatPassword) {
            alert("Register confirm")

            const nameSave = localStorage.setItem("nameInput", nameInput)
            const mailsave = localStorage.setItem("email", emailInput);
            const password = localStorage.setItem("password", repeatPassword)

            console.log(nameSave)
            console.log(mailsave)
            console.log(password)

            window.location.href = "login.html"

            return true
        }
}