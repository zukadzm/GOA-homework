// 2) გადმოგეცემათ დოლარების (ინტეჯერების) მასივი, შექმენით ახალი მასივი და მასში შეინახეთ ლარების ვერსია

const dolarebi = [10, 20, 30, 40, 50]
const larshi = 2.5

const larshiGadayvana = dolarebi.map(dolarebi => dolarebi * larshi)

console.log(larshiGadayvana)


// 3) გადმოგეცემათ მასივი სიტყვების და შეინახეთ სხვა ცვლადში მხოლოდ პალინდრომები

const sityvebi = ["hello","olleh","ana","world","word"]

const chek = (word) => {
    return word === word.reverse()
}

const filt = sityvebi.filter(chek)

console.log(filt)

// 4) გადმოგეცემათ კრედიტ კარტის რიცცვები და გადააკეთეთ ეს მასივი რომ ჩანდეს მხოლოდ ამ კარტების ბოლოს 4 რიცხვები. (მაგ: ************5678)

const creditCard = [15234634585637]

const rev = creditCard.map(card => "***********" + card.slice(-4))

console.log(rev)


// 5) გამოგეცემათ მატრიცა და შექმენით ფუნქცია toObj - რომელიც გადააქცევს ამ მატრიცას ობიექტად, ( მატრიცაში თითოეულ მასივს ექნება 2 ელემენტი [key, value] )


function toObj(matrix){
    return matrix.reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj
    })
}

const matrix = [
    ["1", "2"],
    ["3", "4"],
    ["5", "6"],
]

const obj = toObj(matrix)

console.log(obj)


// 6) შექმენით ფუნცია რომელსაც გადაეცემა ობიექტების მასივი ( ობიექტებს აქვთ სახელის და ქულის პროპერთიები ), თქვენი მიზანია დააბრუნოთ მასივი დასორტირებული სახელების მხოლოს. ( სტრინგების )

function func(objects){
    return objects
        .filter(obj => obj.name)
        .map(obj => obj.name)
        .sort()
}

const people = [
    {name: "name1", score: 80},
    {name: "name2", score: 75},
    {name: "name3", score: 95},
    {score:70}
]

const sorted = func(people)

console.log(sorted)