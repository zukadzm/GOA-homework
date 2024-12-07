// 1) შექმენით მასივი რომელშიც ჩაამატებთ ყველა რიცხვს 0-იდან 100-ის ჩათვლით, შემდეგ მასივზე კიდევ იმუშავებთ for ციკლით და ყველა ლუწი რიცხვის ჯამს გამოიტანთ
// const arr = new Array();
// for(let i = 0; i < 100; i++) {
//         arr.push(i)
// }

// let evensum = 0;
// for(let i = 0; i < evensum.lenght; i++){
//     if(i % 2 === 0){
//         evensum =+ i
//     }
// }

// console.log(evenSum)

// 2) შექმენით მასივი სცადეთ კონსოლში გამოიტანოთ ისეთ ინდექსზე მყოფი ელემენტი რომელიც არ გაქვს მასივში

// const arr =[];
// arr.push("Zuka")

// 3) ყველა ახალ ნასწავლი მეთოდის გამოყენებით შექმენით თითოეულ ატგანზე 2-2 მაგალითი და ახსენით კომენტარებით თქვენი სიტყვებით თუ რას აკეთებს თითოეული მეთოდი (push,pop,unshift,shift, slice, splice)

// const Myarr = ["html","css","Javascript","Python"]
// Myarr.shift() // shift - პირველ ელემენტს შლის(აშორებს) მასივიდან
// console.log(Myarr)

// const Myarr = ["html","css","Javascript","Python"]
// Myarr.unshift() // unshift(2) - ამატებს მასივის დასაწყისში ელემენტს ოღონდ ჩვენ უნდა მივანიჭოთ.
// console.log(Myarr)

// const Myarr = ["html","css","Javascript","Python"]
// Myarr.pop() // აშორებს ელემენტს სიის ბოლოში
// console.log(Myarr)

// let strr = "Zuka"
// const Myarr = ["html","css","Javascript","Python"]
// Myarr.push(strr)
// console.log(Myarr)

// const Myarr = ["html","css","Javascript","Python"]
// Myarr.splice(1) //splice - მეთოდი გამოიყენება იმისთვის რომ დავამატოთ ელემენტებნი მასივში
// console.log(Myarr)

// const Myarr = ["html","css","Javascript","Python"]
// Myarr.slice(1,2) //slice - ამოჭრის, და გვიბრუნებს ახალ მასივს
// console.log(Myarr)


// 4) შექმენით ფუნქცია სახელად manualSlice რომელსაც გადაეცემა პირველი მასივი, და ორი რიცხვი საწყისის ინდექსი და დასდასრულის ინდექსი, თქვენიო დავალებაა გადმოცემული ინდექსიდან მეორე ინდექსამდე ჩამოაჭრათ სიას ნაწილი და დააბრუნოთ ფუნქციიდან გამოიყენეთ for ციკლი

// function  manualSlice(array,startindex,endindex) {
//     const listn = [];
//     for(let i = array; startindex < endindex; i++)
//         listn.push(i)
// }


// function manualreverse(arr) {
//     let reverse = []
//     for(let i = arr.length -1; i >= 0; i--) {
//         reverse.push(i)
//     }

// }
// შექმენით ფუნქცია სახელად manualIndexOf რომელსაც გადაეცემა მნიშნელობა და სია, თქვენი დავალებაა ფუნქციიდან დააბრუნოთ ნაპოვნი მნბიშნელობის ინდექსი, თუ გადმოცემული მნიშნელობა სიაში არ მოიძებნა დააბრუნეთ -1
// function manualindexof(value,arr) {
//     for(let i = 0; index < arr.length; i++) {
//         if(index === value)
//     }
// return -1
// }

// 7) გააკეთეთ 3-3 მაგალითი შესწავლილ მეთოდებზე: .indexOf(), .lastIndexOf(),.sort(),.reverse()

// const names = ["html","python,","java"]
// console.log(names.indexOf[1]) // indexOf - გვიბრუნებს ჩვენი გადაცემული არგუმენტის ინდექს
// console.log(names.sort()) // sort - თან მიმდევნურად ალაგებს სიას
// console.log(names.reverse()) // reverse - შემოაბრუნებს სიას  
// console.log(names.lastIndexOf[2])

