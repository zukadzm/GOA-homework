//დაუმატეთ და გააუმჯობესეთ Day 126-ის დავალება, დაამატეთ Error handling-ი. საიტზე გამოიტანეთ ერორები ლამაზად, ყველა ერორს უნდა ჰქონდეს სხვადასხვანაირი სტილი, მაგალითად თუ ერორი არის 200 მაშინ მწვანედ გამოიტანეთ, თუ ერორი არის 301, 302 ან 304 მაშინ ლურჯად და ასე შემდეგ.
const display = document.getElementById("errorHandlingDiv")
fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => {
        if(res.ok) {

            display.textContent = "Sucsses 200"

            const image = document.getElementById("img")

            const button = document.getElementById("btn")
    
            button.addEventListener("click",function(e){
                e.preventDefault()
                image.innerHTML = res
            })
        } else if(!res.ok) {
            display.textContent = "There was error 404"
            throw new Error("There was error 404")
        }
    }).catch(err => console.error(err))