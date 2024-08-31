// ) 1)შექმენით ჯავასკრიპტში ობიექტი, ობიექტის სახელია me დაამატეთ კუთვნილებები რომელიც დაახასიათებს თქვენს თავს, შექმნის შემდეგ შეცვალეთ რომელიმე კუთვნილება, დაამატეთ ახალი კუთვნილება და წაშალეთ, საბოლოოდ კი დაბეჭდეთ მთლიანი ობიექტი  და დაბეჭდეთ ცალ-ცალკე ყველა კუთვნილება

// const me = {
//     firstname: "zuka",
//     surname: "Qoridze",
//     age: 15,
//     country: "Georgia",
//     fakeage: 4
// }


// console.log(me.street)
// me.street = "Samtredia"
// delete me.fakeage


// 2) შექმენით ობიექტი სადაც დაამატებთ მინიმუმ 5 კუთვნილებას და 2 მეთოდს, კომენტარებით ახსენით რა არის ობიექტი რა არის მეთოდი რა არის this keyword და ყველაფერი ის რაც ვისწავლეთ: კუთვნილებები,. შეცვლა წაშლა დამატბეა

// const car = {
//     namme: "Mercedes",
//     name2: "mercedes Cls 63",
//     Out: 2021,
//     name3: "mercedes amg e63 s",
//     out2: 2018,

    
//     hello: function(){
//         console.log("hello")
//     },

//     printinfo2 () {
//         console.log(this.name2)
//     }
// }
 
// console.log(car.Bmw)
// car.out2 = 2017

// delete car.printinfo
// printinfo()
// printinfo2()
// console.log(car)

// ობიექტი რასაც ვხედავთ და ვეხებით,ობიექტებს გააჩნია კუთვნილებები მე მაგალითად ჩემი სახელი მეკუთვნის,გვარი,და ასშ 
// this.name2 ანუ ეს კუთვნილება


// 3) შექმენიტ კონსტრუქტორი რომელიც შექმნის ერთი და იგივე სტრუქტურის მქონე ობიექტებს, აწარმოეთ კონსტრუქტორით რობოტები, გამოიძახეთ კონსტრუქტორი 3 ჯერ და ახსენით თქვენი სიტყვებით რა არის კონსტურტქორი და new

// function Robot(name, createdAT, name2) {
//     this.name = name;
//     this.createdAT = createdAT,
//     this.name2 = name2,

//     this.printinfo = function() {
//         console.log(this.name, this.createdAT, this.name2)
//     }
// }

// const Robot1 = new Robot("Kwamba","Okwangela",1990)
// const Robot2 = new Robot("Asong"," Nlend",2000)
// const Robot3 = new Robot("Yenkatabuwe","Lèndi",1999)