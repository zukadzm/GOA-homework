// შექმენით გვერდი სადაც ჰექნებათ მარტივი და სუფთა ინტერფეისი, ამ გვერდზე უნდა გამოიტანოთ უახლესი ამბები


// Boss point: დაამატეთ searchის სისტემა რომ მომხმარებელმა მარტივად იპოვოს კონკრეტული ინფორმაცია

// 78b58d1e8a1f49b8b0fec0ed38cc0f33

let apiKey = '78b58d1e8a1f49b8b0fec0ed38cc0f33'

async function news() {
    try{
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
        let jsonRes = await res.json();
        let displaynews = document.getElementById("displaynews")

        jsonRes.articles.forEach(elem => {
            displaynews.innerHTML += `<h2>${elem.title}</h2><p>${elem.description}</p>`
        });
    }catch(err){
        console.error("ERROR", err)
    }
}
news()