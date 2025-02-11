// 1) სტუდენტების სახელებისა და ქულების შენახვა Map-ში
// აღწერა: შექმენით ფუნქცია, რომელიც მიიღებს სტუდენტების სიას (სახელები და ქულები) და Map-ს დააბრუნებს, სადაც სტუდენტების სახელები იქნება გასაღები, ხოლო მათი ქულები მნიშვნელობები.
// დავალების ამოცანა:

// function mapAppend(student){
//     const new_map = new Map()
    
//     for(let i = 0; i<student.length; i++) {
//         let name = student[i].name
//         let score = student[i].score
//         new_map.set(name, score) // new_map ში დავამატეთ name, score
//     }
// }
// const student = [
//     {name: "Zuka", score: 100},
//     {name: "Zuka2", score: 94}
// ]
// const mp = mapAppend(student)
// console.log(mp)

//  2) შექმენით ფუნქცია, რომელიც მასივიდან დუბლიკატ ელემენტებს წაშლის და ახალ უნიკალურ მასივს დააბრუნებს.

// function removeDup(array){
//     return new Set(array)
// }
// const numbers = removeDup([1,2,322,3,3,3,1,2])
// console.log(numbers)


// 3) დაწერეთ ფუნქცია, რომელიც მიიღებს სტუდენტების ქულების Map-ს, შექმნის მისი ასლს, თითოეული სტუდენტის ქულას გაზრდის 5 ქულით და ასლ Map-ს დააბრუნებს.

// function dupeMap(score){
//     const my_map = new Map();

//    for(let [name, grade] of score) {
//         my_map.set(name,grade + 5)
//    }
//    return my_map={}
// }
// const student2 = [
//     {name: "Zuka", score: 100},
//     {name: "Zuka2", score: 94}
// ]
// const mp2 = dupeMap(student2)
// console.log(mp2)
