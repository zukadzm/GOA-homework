//1) შექმენით arrow function, რომელიც იღებს ერთი პარამეტრს (სახელი) და აბრუნებს „გამარჯობა, [სახელი]!“. თუ პარამეტრი არ არის მოცემული, გამოიყენეთ "მაყურებელი" როგორც დეფოლტი.


// 1) const hello = function(firstName="მაყურებელი") {
//     return `hello, ${firstName}`
// }

// console.log(hello("zuka"))]

// 2) შექმენით arrow function, რომელიც იღებს ორი პარამეტრს (a, b) და აბრუნებს მათ ჯამს. თუ პარამეტრები არ არის მოცემული, გამოიყენეთ 0 და 5 როგორც დეფოლტი მნიშვნელობები.

// 2) const multiply = function(a=0, b=5) {
//     return a + b
// }
// console.log(multiply(1, 5))

// 3) შექმენით arrow function, რომელიც იღებს ორი რიცხვს და აბრუნებს მეტს მათ შორის. თუ პარამეტრები არ არის მოცემული, გამოიყენეთ 10 და 20 როგორც დეფოლტი მნიშვნელობები.

// 3) const maxx = function(a=10, b=20) {
//     if(a > b) {
//         return `${a} მეტია ${b}-ზე`
//     } else if(a < b) {
//         return `${a} ნაკლებია ${b}-ზე`
//     }
// }
// console.log(maxx(44, 444))


// 4) შექმენით arrow function, რომელიც იღებს სამი პარამეტრს და აბრუნებს მათ გამრავლებას. თუ პარამეტრები არ არის მოცემული, გამოიყენეთ 1, 2 და 3 როგორც დეფოლტი მნიშვნელობები.

// 4) const multiply2 = function(a=1, b=2, c=3) {
//     return a * b * c
// }

// console.log(multiply2(2, 2, 2)

// 5) შექმენით arrow function, რომელიც იღებს ორ პარამეტრს (ფასს და გადასახადს) და აბრუნებს საბოლოო ფასს (ფასი + გადასახადი). თუ გადასახადი არ არის მოცემული, გამოიყენეთ 5% როგორც დეფოლტი.

// 5) const miniShop = function(price=5, buy=5) {
//     return price + buy
// }
// console.log(miniShop(10, 20))

// 6) შექმენით arrow function, რომელიც იღებს ტექსტს და რიცხვს და აბრუნებს ტექსტის გამეორებას მოცემული რიცხვის რაოდენობის მიხედვით. თუ რიცხვი არ არის მოცემული, გამოიყენეთ 3 როგორც დეფოლტი.

// 6) const strint = function(a, b=3) {
//     return a.repeat(b) 
// }
// console.log(strint("Hello", 5))

// 7)შექმენით arrow function, რომელიც იღებს ორი რიცხვს და აბრუნებს true თუ პირველი რიცხვი მეტია მეორეზე. თუ არ არის პარამეტრები, გამოიყენეთ 5 და 10 როგორც დეფოლტი.

// 7)const numbers = function(a=5, b=10) {
//     if(a > b) {
//         return `${a}-მეტია ${b}-ზე`
//     } else if(a < b) {
//         return `${a} ნაკლებია ${b}-ზე`
//     }
// }
// console.log(numbers(100, 200))

// 8)შექმენით arrow function, რომელიც იღებს ობიექტს, რომელშიც არის სახელი, ასაკი და ქალაქი. თუ რომელიმე პარამეტრი არ არის მოცემული, გამოიყენეთ მაია, 25 და თბილისი როგორც დეფოლტი მნიშვნელობები. ფუნქცია უნდა დააბრუნოს სტრინგი, რომელიც შეიცავს შემდეგ შინაარსს: "გამარჯობა, მე ვარ [სახელი], [ასაკი] წლის და მცხოვრები ვარ [ქალაქი]-ში."

// 8)const welcomeD = function(firstName="მაია", age=25, country="თბილისი") {
//     return `გამარჯობა, მე ვარ ${firstName}, ${age} წლის და მცხოვრები ვარ ${country}`
// }
// console.log(welcomeD("Zuka",15,"Georgia"))

//9) შექმენით arrow function, რომელიც იღებს დასაწყისის რიცხვს, ბოლოს რიცხვს და ნაბიჯის ზომას. ფუნქცია უნდა დააბრუნოს ყველა რიცხვი იმ ინტერვალებში, მიცემული ნაბიჯის ზომით. თუ რომელიმე პარამეტრი არ არის მოცემული, გამოიყენეთ 1, 10 და 1 როგორც დეფოლტი.

// 9) const counter = function(start=1, end=10, step=1) {
//     result = []
//     for(let i = start; i <= end; i += step) {
//         result.push(i)
//     }
//     return result
// }
// console.log(counter(1, 20, 2))

