// 1.Basic Callback - Logging a Message with Delay
// Goal: გაიგო, როგორ გამოიყენება callback ფუნქცია და setTimeout().

// Task:
// წერე ფუნქცია, რომელიც იღებს name და callback ფუნქციას. ფუნქცია უნდა დაიდოს setTimeout()-ში, რომ 2 წამში დაბეჭდოს მისასალმებელი მესიჯი.

// function hello(){
//     setTimeout(() => console.log("Hello"), 2000)
// }

// function callback(){
//     setTimeout(() => console.log("callback"), 2000)
// }

// hello(callback())


// 2.Callback with Time Delay (Simulate a Process)
// Goal: გამოიყენე callback და setTimeout() დროის დაგვიანებისათვის, რომ შეიქმნას რეალური პროცესის მოლოდინი.

// Task:
// წერე ფუნქცია, რომელიც იღებს მესიჯს და callback ფუნქციას. ფუნქცია უნდა დაბეჭდოს მესიჯი 2 წამით დაგვიანებით setTimeout()-ის გამოყენებით. შემდეგ callback უნდა ამოწმებდეს, რომ პროცესი დასრულდა.

// function hello(){
//     setTimeout(() => console.log("Hello"), 3000)
// }

// function callback(){
//     setTimeout(() => console.log("callback"), 1000)
// }



// 3.hello(callback())
// Callback for Array Manipulation with Delay
// Goal: გამოიყენე callback და setTimeout() მასივის ელემენტების შესაცვლელად, დროის დაგვიანებით.

// Task:
// წერე ფუნქცია, რომელიც იღებს რიცხვების მასივსა და callback ფუნქციას. თითოეული რიცხვის კვადრატის გამოთვლა უნდა განხორციელდეს setTimeout()-ის გამოყენებით, რათა იყოს რეალური დელაიდებული პროცესი, და შემდეგ უნდა დააბრუნოს ახალი მასივი.


function callback(){
    setTimeout(() => console.log("callback"), 3000)
}