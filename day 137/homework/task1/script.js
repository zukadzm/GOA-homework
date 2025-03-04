// შექმენით ვებსაიტი, რომელიც გამოიტანს ანბანის მიხედვით მომხმარებლებს (ა-დან ჰ-მდე)API : (https://jsonplaceholder.typicode.com/users)

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        if(res.ok) {
            const display = document.getElementById("displayDiv");

            res.forEach(s => {
                display.innerHTML = `${username}, ${city}`
            })
        }
    }).catch(err => console.error(err))