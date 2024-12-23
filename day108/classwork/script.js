// 1) შექმენით ობიექტი და გამოიტანეთ მისი ინფორმაცია შემდეგი ფორმატით ( key: value )
// const myObj = {
//     firstName: "Zuka",
//     surname: "qoridze",
//     age: 15,
//     country: "Georgia"
// }
// for(let i in myObj) {
//     console.log(`${i}: ${myObj[i]}`)
// }

// Bonus) გააკეთეთ იგივე თუმცა გამოიტანეთ ინფორმაცია თუ value-ს 5-ზე ნაკლები ასო აქვს 
const myObj = {
    firstName: "Zuka",
    surname: "qori",
    age: 1,
    country: "Geo"
}
for(let i in myObj) {
    if(myObj[i].length < 5) {
        console.log(`${i}: ${myObj[i]}`)
    }
}