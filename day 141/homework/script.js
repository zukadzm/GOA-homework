// ხუმრობისა და რჩევის გენერატორი – დავალება
// 🛠 ამოცანა:
// შექმენით ვებგვერდი, რომელიც:
// 1️⃣ შემთხვევითი ხუმრობის მიღებას შეძლებს არჩეული კატეგორიის მიხედვით
// 2️⃣ გამოიტანს შემთხვევით რჩევას
// 3️⃣ ორივე მონაცემს მოიპოვებს fetch ფუნქციის დახმარებით
// 4️⃣ API-დან მონაცემებს async/await-ით დაამუშავებს
// 5️⃣ სწორად გაუმკლავდება შეცდომებს
// მომხმარებელი აირჩევს კატეგორიას, დააჭერს ღილაკს და მიიღებს:
// ✅ ხუმრობას – თუ ეს ერთხაზიანია, მაშინ პირდაპირ ტექსტს; თუ ორხაზიანია, ორივე ხაზს
// ✅ რჩევას – შემთხვევითი მოტივაციური წინადადება
// 🔗 API მისამართები:
// ხუმრობა: https://v2.jokeapi.dev/joke/Any?safe-mode
// რჩევა: https://api.adviceslip.com/advice
// Good luck! (ง'̀-'́)ง

async function generator() {
    try{
        let joke = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
        let advice = await fetch("https://api.adviceslip.com/advice")
        if(!joke.ok){
            throw new Error("ERROR")
        }
        if(!advice.ok){
            throw new Error("ERROR")
        }
        let dataJoke = await joke.json()
        let dataAdvice = await advice.json()
        
        const jokeButton = document.getElementById("jokeButton");
        const adviceButton = document.getElementById("adviceButton");
        const jokeDisplay = document.getElementById("jokeDisplay")
        const adviceDisplay = document.getElementById("adviceDisplay")

        jokeButton.addEventListener("click",function(e){
            e.preventDefault()
            jokeDisplay.innerHTML = `joke: ${dataJoke.joke}`
        })

        adviceButton.addEventListener("click",function(e){
            e.preventDefault()
            adviceDisplay.innerHTML = `id: ${dataAdvice.slip.advice}`
        })

    }catch(err){
        console.error("Error", err)
    }
}
generator()