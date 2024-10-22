// ასოციაციურ - str,int
// ობიექტი - ინდექსები წარმოდგენილია str,int...

// console.log(Math.PI()); // აბრუნებს მუდმივ რიცხვს
// console.log(Math.floor(3.6)); // float - ს გარდაქმქნის უახლოეს integet თან
// console.log(Math.random()); // თუ არ გადავეცით არაფერი გამოიტენს 0,1 მდე random რიცხვს ასევე შეგვიძლია გადავცეთ რიცხვი
// console.log(Math.sqrt(10)); // ფუძის ხარისხი
// console.log(Math.abs(-2.7)); // გამოაქვს მარტო დადებითი რიცხვი
// console.log(Math.ceil()); // უახლოეს integer ამდე ამრგვალებს რიცხვს floats ამრგვალებს ზემოთ ანუ 1.2 რომ დავწერო 1.2 = 2;
// console.log(Math.trunc(1.4444432)) // აშორებს float რიცხვს


const pa = document.getElementById("pa");
const njru = document.getElementById("njru");
const pi = document.getElementById("pi");

const result = document.getElementById("result");

pa.addEventListener("click",function(){
    Math.random();
    pa.textContent = pa
})

njru.addEventListener("click",function(){
    Math.random();
    result.textContent = njru
})

pi.addEventListener("click",function(){
    Math.random();
    result.textContent = pi
})