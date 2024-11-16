// 1) Პროგრამის ღილაკზე დაჭერით Fade In/Fade Out ანიმაცია - შექმენით ელემენტი, რომელიც ღილაკზე დაჭერით ნელ-ნელა გამოჩნდება ან გაქრება
// const button = document.getElementById("btn");
// const hideen = document.getElementById("hidden")
// const hide = document.getElementById("btnhide")

// hideen.style.opacity = 0

// button.addEventListener("click",function(){
//     hidden.style.opacity = 1
// })

// hide.addEventListener("click",function(){
//     hideen.style.opacity = 0
// })


// 2 )Slide In ანიმაცია - შექმენით ბლოკი, რომელიც ღილაკზე დაჭერისას გვერდიდან ნელა გამოვა.

// const button = document.getElementById("btn");
// const box = document.getElementById("block");

// box.style.width = "150"+"px";
// box.style.height = "150"+"px";
// box.style.backgroundColor = "red";

// button.addEventListener("click",function(){
//         box.style.marginLeft = "100"+"px"   
// })

// 3) Მოძრავი ბურთი - შექმენით პატარა ბურთი, რომელიც მარჯვენა მხარეს ნელა გადადის და შემდეგ უკან ბრუნდება.

// const ball = document.getElementById("ball");
// const button = document.getElementById("btn");

// ball.style.width = "150"+"px";
// ball.style.height = "150"+"px";
// ball.style.backgroundColor = "red";


// const pos = 0;

// const move1 = setInterval(move, 500)

// function move(){
//     button.addEventListener("click",function(){
//         pos += 1;
//         ball.style.left = pos+"px"
//     })
// }




// Მოცემული ტექსტის ნელა გაზრდა - ტექსტის ზომის ნელა გაზრდა და დაბრუნება თავდაპირველ ზომაზე, ღილაკზე დაჭერისას.

// const p = document.getElementById("txt");
// const button = document.getElementById("siz");


// const time = setInterval(move2, 500);


// button.addEventListener("click",function move2(){
//     time =+ 1;
//     p.style.fontSize = time+"px";
// })


// როტაცია - დააგეგმეთ ანიმაცია, რომელიც ელემენტს ნელა ატრიალებს ღილაკზე დაჭერისას.

// ყველაფერი ჯავასკრიპტის ანიმაციებით.


// const div = document.getElementById("block");
// const button = document.getElementById("btn");

// div.style.width = "100"+"px";
// div.style.height = "100"+"px";
// div.style.backgroundColor = "red";

// button.addEventListener("click",function(){
//     div.style.transform = "translateY(10)"
// })