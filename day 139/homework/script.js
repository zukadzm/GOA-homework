// 1) გააკეთეთ საიტი რომელსაც ექნება სამი ჩექბოქსი: კატა , ძაღლი  და მელა, თქვენი მიზანია გამოიტანოთ generate ღილაკით, შესაბამისი ფოტო (რენდომად) თითო დაკლიკებაზე.
// cat_api: "https://api.thecatapi.com/v1/images/search"
// dog_api: "https://dog.ceo/api/breeds/image/random"
// fox_api: "https://randomfox.ca/floof/"
// წარმატებები!! ᕦ(ò_óˇ)ᕤ

function generate(){
    const containerIMG = document.getElementById("containerIMG")

    const cat = document.getElementById("cat").checked;
    const dog = document.getElementById("dog").checked;
    const mela = document.getElementById("mela").checked;
        
    if(cat){
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(res => res.json())
            .then(res => {
                const img = document.createElement("img");
                img.src = res.url;
                img.alt = "Cat"
                containerIMG.appendChild(img)
            }).catch(error => console.error("FIND ERROR"))
    } else if(dog) {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res2 => res2.json())
            .then(res2 => {
                const img2 = document.createElement("img");
                img2.src = res2.message;
                img2.alt = "Dog"
                containerIMG.appendChild(img2)
            }).catch(error => console.error("FIND ERROR"))
    } else if(mela) {
        fetch("https://randomfox.ca/floof/")
            .then(res3 => res3.json())
            .then(res3 => {
                const img3 = document.createElement("img");
                img3.src = res3.link
                containerIMG.appendChild(img3)
            }).catch(error => console.error("FIND ERROR"))
    }
 
}
generate()