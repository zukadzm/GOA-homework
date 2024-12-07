// 2) ID ები class ები და მათზე ვარჯიში 

// >შეცვაკლეთ ტექსტის შიგტავსი js-ის გამოყენებით და ღილაკზე დაჭერისას console.log -ში გამოიტანეთ

// const p = document.getElementById("par");

// p.textContent = "Zuka2";

// p.addEventListener('click',function(){
//     console.log("Zuka qoridze")
// })

// >შექმენით div ბლოკი და ჩაწერეთ შიგნით ტექსტი, შემდეგ js ის ფაილის გამოყენებით შეაბრუნეთ მათი ფერები, ანუ div ბლოკის ფერი მიანიჭეთ ტექსტს და ტექსტის ფერი დივ ბლოკს

// const ps = document.getElementById("alltext");

// ps.style.color = "red";

// >ID ის ელემენტისთვის გაწერით, ღილაკზე დაკლიკვისას გაქრეთ ეს ელემენტი ეკრანიდან (გამოიყენეთ სტილი display: none

// const button = document.getElementById("btn");

// button.addEventListener("click",function(){
//     button.style.display = "none";
// })


// >გაუწერეთ სამ ელემენტს ერთი და იგივე კლასი და ღილაკზე დაჭერისას შეუცვალეთ მათ ფონტი

// const buttons = document.getElementsByClassName("btn");

// buttons.onclick = function() {
//     buttons.style.color = "red"
// }


// 3)ტექსტების მანიპულირება

// >შექმენით ღილაკი რომელზე დაჭერაც პარაგრაპს უცვლის შიგთავსს

// const p = document.getElementById("zk");

// p.addEventListener("click",function(){
//     p.textContent = "Zuka1"
// })

// >გამოიყენეთ img tag ი და ღილაკზე დაჭერისას შეუცვალეთ ლინკი 

// const image1 = document.getElementById("imgg");

// image.addEventListener("click",function(){
//     image.src = "ball2";
// })

// >შექმენით input ველი ID ით და ღილაკი. როდესაც დააჭერთ ღილაკს, input ველში შეყვანილი ტექსტი გამოაჩინეთ პარაგრაფში.


// const name0 = prompt("Enter your name: ")
// const p = document.getElementById("namme");

// p.textContent = name0