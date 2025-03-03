//  ააგეთ საიტი სადაც გექნებათ ონლაინ მაღაზია, ჯერ მომხმარებელი უნდა დარეგისტრირდეს, მონაცემები უნდა შეინახოს LocalStorage-ში, თუ რეგისტრაცია წარმატებული იქნება მაშინ მომხმარებელი უნდა გადაიყვანოს მაღაზიის გვერდზე სადაც იქნება განლაგებული პროდუქტები, ასევე მომხმარებელს უნდა შეეძლოს რომ დაამატოს პროდუქტები Cart-ში. optional: მომხმარებელს უნდა შეეძლოს, რომ1 კლიკით იყიდოს ყველა პროდუქტი ან წაშალოს Cart-იდან. <3


const firstButton = document.getElementById("firstButtonCart");
const firstButton2 = document.getElementById("firstButtonCart2");
const firstButton3 = document.getElementById("firstButtonCart3");
const firstButton4 = document.getElementById("fourBtn");
const firstButton5 = document.getElementById("fourBtn1");
const firstButton6 = document.getElementById("fourBtn2");

const clearCartButton = document.getElementById("clearCart");
const addAllButton = document.getElementById("addCart");

const cart = document.getElementById("crt");
let count = 0

function market(){
    firstButton.addEventListener("click",function(e){
        e.preventDefault()
        count++;
        cart.textContent = `Cart: ${count}`

        if(count === 15) {
            alert("მეტი არ შეგიძლია აღარ არის მარაგში")
            return false
        }
    })

    firstButton2.addEventListener("click",function(e){
        e.preventDefault()
        count++;
        cart.textContent = `Cart: ${count}`

        if(count === 15) {
            alert("მეტი არ შეგიძლია აღარ არის მარაგში")
            return false
        }
    })

    firstButton3.addEventListener("click",function(e){
        e.preventDefault()
        count++;
        cart.textContent = `Cart: ${count}`

        if(count === 15) {
            alert("მეტი არ შეგიძლია აღარ არის მარაგში")
            return false
        }
    })

    firstButton4.addEventListener("click",function(e){
        e.preventDefault()
        count++;
        cart.textContent = `Cart: ${count}`

        if(count === 15) {
            alert("მეტი არ შეგიძლია აღარ არის მარაგში")
            return false
        }
    })

    firstButton5.addEventListener("click",function(e){
        e.preventDefault()
        count++;
        cart.textContent = `Cart: ${count}`

        if(count === 15) {
            alert("მეტი არ შეგიძლია აღარ არის მარაგში")
            return false
        }
    })

    firstButton6.addEventListener("click",function(e){
        e.preventDefault()
        count++;
        cart.textContent = `Cart: ${count}`

        if(count === 15) {
            alert("მეტი არ შეგიძლია აღარ არის მარაგში")
            count = count
            return false
        }
    })

    clearCartButton.addEventListener("click",function(e){
        e.preventDefault()

        count = 0
        cart.textContent = `Cart: ${count}`
    })

    addAllButton.addEventListener("click",function(e){
        e.preventDefault()

        count += 6
        cart.textContent = `Cart: ${count}`

        if(count == 15) {
            alert("არ შეგიძლია მეტის დამატება არ არის მარაგში")
            return false
        }
    })

}
market()