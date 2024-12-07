// შექმენით for ციკლი რომელიც 20-იდან 50-მდე გამოიტანს ყველა რიცხვს კონსოლში

// for(let i = 20; i < 50 ; i++) {
//     console.log(i)
// }

// გამოიტანეთ 30-იდან 60-ის ჩათვლით ყველა რიცხვი კონსოლში while ციკლის საშვალებით

// let i = 50
// while(i < 30) {
//     console.log(i)
//     i ++
// } 


// შექმენით ფუნქცია სახელად changeColor რომელიც ფერს შეცვლის div block-ს შესაბამის ღილაკზე დაჭერისას
// დაამატეთ ღილაკები: Red, Blue, Green, Purple, Black
const red = document.getElementById("RED")
const blue = document.getElementById("BLUE")
const green = document.getElementById("GREEN")

red.addEventListener("click",function(){
    red.style.color = "red"
})

blue.addEventListener("click",function(){
    blue.style.color = "blue"
})

green.addEventListener("click",function(){
    green.style.color = "green"
})



// const red = document.getElementById("RED")
// const blue = document.getElementById("BLUE")
// const green = document.getElementById("GREEN")

// red.addEventListener("click",function(){
//     red.style.color = "red"
// })

// blue.addEventListener("click",function(){
//     blue.style.color = "blue"
// })

// green.addEventListener("click",function(){
//     green.style.backgroundColor = "green"
// })


// შექმენით ფორმა რომელშიც მომხმარებელი შემოიტანს თავის სახელს, ემაილს და სასურველ მესიჯს (დაგჭრდებათ rows,cols) javascript-ის საშვალებით შეზღუდეთ მესიჯის ზომა რომ მომხმარებელმა ვერ შეძლოს 200 ასოზე მეტის შემოტანა, ასევე დაამატეთ მესიჯის ქვევით div ბლოკი რომელშიც მომხმარებელი დაინახავს თუ რამდენი სიმბოლო აქვს გამოყენებული 200-იდან

// const messageBox = document.getElementById("message")
// const countBox = document.getElementById("count")

// messageBox.addEventListener("input",counter)

// function counter(){
//     const limit = 200;
//     let current_count = messageBox.value.length

//     if(current_count > limit){
//         countBox.style.color = "red"
//         countBox.textContent = "Character limit exceeded";
//     }
//     else{
//         countBox.style.color = "green"
//         countBox.textContent = current_count + "/" + limit;
//     }
// }


// შექმენით პარაგრაფი, რომლის საწყისი ტექსტი იქნება 0. მის ქვემოთ შექმენით ერთი ღილაკი, რომლის ყოველ დაკლიკებაზე counter ცვლადს ერთი მოემატება და ეს რიცხვი გახდება პარაგრაფის textcontent

// const button = document.getElementById("btn1")
// const p = document.getElementById("result")

// let number = 0
// number = 0

// button.addEventListener("click",function(){
//     number++
//     p.textContent = number
// })


// შექმენით ლოგიკა რომლის მიხედვითაც მომხმარებელს უნდა შემოატანინოთ 
// პაროლი თუ პაროლი სწორია alert-ის საშვალებით გამოიტანეთ რომ მას მიეცა 
// წვდომა, ხოლო თუ არასწორია თავიდან შეეკითხეთ პაროლი და მოაკელით 
// პაროლის მცდელობა, თავიდან მცდელობები არის 3 თუ მცდელობები ამოიწურა 
// ითიშება while ციკლი, ყოველ ცდაზე უნდა გამოუტანოთ მცდელობების რაოდენობა 
// (დაგჭირდებათ while ციკლი და if პირობითი განცხადება)


// const password = "luka1234";
// let pass;
// let attempts = 3;


// while(attempts > 0){
//     let pass = prompt("Enter your password");
//     if(pass !== password){
//         attempts --
//         alert("You have attempts " + attempts + "left")
//     }
//     else {
//         alert("Access granted")
//         break;
//     }
//     if(attempts === 0){
//         alert("System blocked, you have run out tries")
//     }
// }

// შექმენით ფუნქცია რომელსაც დაარქმევთ generate even ამ ფუნქციას უნდა გადაეცემოდეს border, ჩვენი დავალებაა რომ შევქმნათ ახალი მასივი შემდეგ მასივში დავამატოთ 0-იდან border-ის ჩათვლით რიცხვები და დავაბრუნოთ მასივი, ხოლო დაბუნებული მასივი უნდა გადავცეთ შემდეგ ფუნქციას calculateSum, თქვენი დავალებაა რომ for ციკლის საშვალებით გამოიანგარიშოთ ყველა რიცხვის ჯამი და დააბრუნოთ

const p = document.getElementById("result")

const first = prompt("Enter first number")
const second = prompt("Enter your second number")

p.textContent = first + second