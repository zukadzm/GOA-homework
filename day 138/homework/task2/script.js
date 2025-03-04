// კომენტარებით ახსენით რაც დაწერეთ მეორე დავალებაში. წარმატებები :)

const display = document.getElementById("errorHandlingDiv")
fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => {
        if(res.ok) { // თუ არის წარმატებით ანუ არის 200

            display.textContent = "Sucsses 200" // მაშინ გამოიტანოს Sucsses 200

            const image = document.getElementById("img") // id ით წამოვიღე შექმნილი img რადგან გამოვიდეს ფოტოები

            const button = document.getElementById("btn")
    
            button.addEventListener("click",function(e){
                e.preventDefault()
                image.innerHTML = res
            })
        } else if(!res.ok) { // თუ არის რაიმე ერორი ანუ არის 404 მაშინ
            display.textContent = "There was error 404"
            throw new Error("There was error 404") // მაშინ შეიქმნას Error
        }
    }).catch(err => console.error(err)) // catch გამოიჭერს შეცდომებს რაიმე თუ იყო error ებს