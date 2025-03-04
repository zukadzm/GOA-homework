// შექმენით ვებსაიტი, რომელიც თითოეულ დაკლიკებაზე გამოიტანს ახალ ძაღლის ფოტოს. API: (https://dog.ceo/api/breeds/image/random)

fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => {
        if(res.ok) {
            const image = document.getElementById("img")

            const button = document.getElementById("btn")
    
            button.addEventListener("click",function(e){
                e.preventDefault()
                image.innerHTML = res
            })
        }
    }).catch(err => console.error(err))