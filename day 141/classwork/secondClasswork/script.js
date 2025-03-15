// 2)შექმნათ ვებსაიტი სადაც გექნებათ ღილაკი და display-div. თქვენი მიზანია თითო ღილაკის დაკლიკებაზე გამოიტანოთ ხუმრობა. ღილაკის დაკლიკებამდე ასევე უნდა იყოს გამოტანილი რაიმე ხუმრობა. დიზაინი შეფასდება
// string -->  'https://v2.jokeapi.dev/joke/Any?safe-mode'
// (async/await)

async function func(){
    try{
        let resp = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode");
        let data = await resp.json()
        const button = document.getElementById("button");
        const p = document.getElementById("display")
        button.addEventListener("click",function(e){
            e.preventDefault()
            p.innerHTML = `joke: ${data.setup}`
        })
    }catch(err){
        console.error("ERROR",err)
    }
}
func()