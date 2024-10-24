// 1) შექმენით ფუნქცია, რომელიც გამოიტანს მესიჯს სამი წამის შემდეგ

// const button = document.getElementById("show");

// let time = 3

// button.addEventListener("click",function(){
//     setInterval(function() {
//         time++;
//         alert("Hello")
//     })
// }, 300)


// 2) შექმენით პროგრამა, რომელიც ყოველ წამს გამოიტანს ამჟამინდელ დროს "საათი:წუთი:წამი"

// const rnTimes = new Date();
// rnTimes.setHours(2);
// rnTimes.setMinutes(45);
// rnTimes.setSeconds(30);

// setInterval(function() {
//     console.log(rnTimes,"this is rn time")
// }, 1000)
// console.log(rnTimes);


// 3) შექმენით პროგრამა, რომელიც ყოველ 3 წამში შეცვლის საიტის background ფონის ფერს.(ფერის მნიშვნელობა შეინახეთ მასივში)

// let colors = ["#000000"];

// setInterval(function() {
//     document.body.style.backgroundColor = colors
// },3000)

// 4) დაწერეთ პროგრამა, რომელიც ყოველ 5 წამში შეცვლის საიტზე არსებული პარაგრაფის textContent-ს

// const p = document.getElementById("paragraph");

// setInterval(function() {
//     p.textContent = "Hello";
// },5000)


// შექმენით პროგრამა ტაიმერი, რომელსაც გადასცემთ 3 ღილაკს Start,Pause,Reset

const p = document.getElementById("result");

const Start = document.getElementById("start");
const Pause = document.getElementById("pause");
const Reset = document.getElementById("reset");
let time = 0;

let time2;
Start.addEventListener("click",function(){
        if(!time2) { // ანუ თუ არ არის დაწყებული მაშინ დაიწყოს
            time2 = setInterval(function() { // ეს ყველაფერი შევინახეთ time2 ცვლადში
                time++;
                p.textContent = time;
            }, 1000)
        }
});
Pause.addEventListener("click",function(){
    clearInterval(time2)
    time2 = null; // null ანუ არ არის მონაცემები აქ time2 ში
})
Reset.addEventListener("click",function(){
    clearInterval(time);
    time = 0;
    p.textContent = time
});

