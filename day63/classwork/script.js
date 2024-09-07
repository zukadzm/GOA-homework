// შექმენით ფუნქცია სახელად manualFilter რომელსაც პირველი გადაეცემა ფუნქცია და მეორე მასივი, ამ ფუნქციაში უნდა გამოიყენოთ for ციკლი და გადაუარეთ გადმოცემულ მასივს, გამოიყენეთ if და გამოიძახეთ გადმოცემული ფუნქცია ამჟამინდელ ინდექსზე მდგომი მნიშნელობით, თუ დაბრუნებული მნიშნელობა არის true დაამატეთ ახალ მასივში და თუ არის false არ დაამატოთ ახალ მასივში, როცა მორჩება for ციკლის მუშაობა დააბრუნეთ ახალი მასივი=, გადაცემული ფუნქციიდან აუცილებლად უნდა ბრუნდებოეს boolean მნიშვნელობა, და უნდა იღებდეს ერთ მნიშნელობას გადაცემულ ფუნქციაში რას შეამოწმებთ თქვენზეა დამოკიდებული

// function manualFilter(a,b) {
//     let manualFilter2 = []

//     for(let i = 0; i > Array.length; i++) {
//         if(i === true) {
//             manualFilter2.push(i)
//         }

//     }

    
// }

// function manualFilter(innerFunc,arr){
//     let res = [];
//     for(let i = 0; i < arr.length; i++){
//         if(innerFunc(arr[i])){
//            res.push(arr[i]); 
//         }
//     }

//     return res;
// }

// function positive_detector(num){
//     if(num > 0){
//         return true;
//     }
//     return false;
// }

// console.log(manualFilter(positive_detector),[5,2,0,2,-6,-2,5,-6]);

// გააკეთეთ 5 მაგალითი თითოეულ მათემატიკური ობიექტის მეთოდზე რომლებიც ვისწავლეთ: sqrt,ceil,floor,trunc,pow,abs,min,max

// console.log(Math.sqrt(2))
// console.log(Math.ceil(4.1))
// console.log(Math.floor(1.9))
// console.log(Math.trunc(1))
// console.log(Math.pow(2,11))
// console.log(Math.abs(-0.20))
// console.log(Math.min(12,312,4112,5,2,4,1))
// console.log(Math.max(123,123,54,2,523))



// შექმენით ინეტრვალი, გადაცემულ ფუნციაში ყოველ ჯერზე შექმენით date ობიექტი, როცა ამჟამინდელი წუთი გაუტოლდება 35, უნდა გაითიშოს ინეტრვალი

// let first = 10
// let second = 20
// let third = 30
// let fourth = 35

// function greet() {
//    let a = new Date ((alert("Hello",first)));
//    let b = new Date (alert("Hello",second));
//    let c = new Date (alert("Hello",third));
//    let d = new Date (alert("Hello",fourth))
 
// }
// setInterval(greet,first,10000)
// setInterval(greet,second,20000)
// setInterval(greet,third,30000)
// setInterval(greet,fourth,35000)

// let zero = 0

// setInterval(function greet(){
//     for(let i = 0; i > 1000; i++) {
//         if(greet === 35) {
//             clearInterval;
//         }
//     }

// },6000)

//შექმენით date ობიექტი, რომელიც შეინახავს ახლანდელ დროს, შემდეგ გამოიტანეთ ამ ობიექტის კუთვნილებები ნასწავლი მეთოდების საშვალებით: getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes(), getSeconds(), get Millieseconds()

// const thistime = new Date();

// const date = thistime.getDate();
// const year = thistime.getFullYear();
// const month = thistime.getMonth();
// const day = thistime.getDay();
// const hours = thistime.getHours();
// const second = thistime.getSeconds();
// const minute = thistime.getMinutes();
// const milisecond = thistime.getMilliseconds();

// console.log(thistime)


// შექენით 2 date ობიექტი რომელთა დროის კუთვნილებებს გამოიტანთ ნასწავლი get მეთოდებით, ობიექტებს არგუმენტებად უნდა გადასცეთ სტრინგები შემდეგი ფორმატით:
// პირველს: "2022-03-25",
// მეორეს: "October 13, 2014 11:13:00"

// const first = {
//     year: "2022",
//     month: december
// }

// const second = {
//     year2: "2014",
//     month: "Summer"
// }

// console.log(first,second)