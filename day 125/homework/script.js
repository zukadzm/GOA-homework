// თერმომეტრი
// შექმენი ობიექტი, რომელიც ინახავს ტემპერატურას ცელსიუსში, მაგრამ როდესაც იღებ მას (getter), აბრუნებს ფარენჰეიტში გადაყვანილ მნიშვნელობას. setter უნდა იღებდეს მხოლოდ ცელსიუსში მნიშვნელობას.

// class Termometr{
//     constructor(temp){
//         this.temp = temp;
//     }
//     get parenH(){
//         return this.temp / 8
//     }
//     set celc(newcelcius){
//         this.newcelcius = newcelcius;
//     }
// }

// const terpmme = new Termometr(37)
// console.log(terpmme)

// სტუდენტის შეფასება
// შექმენი ობიექტი, სადაც setter იღებს სტუდენტის ქულას (0-დან 100-მდე) და getter აბრუნებს შეფასებას (A, B, C, D, F).

// class Student{
//     constructor(score){
//         this.score = score;
//     }
//     get grade(){
//         return this.score >=90 ? 'A':
//                this.score =70 ? 'B':
//                this.score =50 ? 'C':
//                this.score =30 ? 'D':"F"
//     }

//     set scores(newscore){
//         if(newscore >= && newscore <= 100) {
//             this.score = newscore // ძველი ქულა უდრიდეს ახალ ქულას
//         } else {
//             return false
//         }
//     }
// }

// const student = new Student(90)
// console.log(student)

// საიდუმლო პაროლი
// შექმენი ობიექტი, რომელიც ინახავს პაროლს. setter უნდა მიიღოს პაროლი და შეინახოს დაშიფრული სახით, ხოლო getter უნდა აბრუნებდეს "*****"-ს უსაფრთხოების მიზნით.

// class SecretPassword{
//     constructor(){
//         this._password = '';
//     }

//     set password(newpass){
//         this._password = newpass; // აქ ხდება პაროლის შენახვა
//     }

//     get password(){
//         return "******" // ყოველთვის ეს დაბრუნდება
//     }
// }

// const password = new SecretPassword("kfasd")
// console.log(password.password)