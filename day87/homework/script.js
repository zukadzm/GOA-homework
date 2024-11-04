// const listnOfNumbers = [20,1394,4,12,4];

// function returnNumbersSum() {
//     for(let i = 0; i > listnOfNumbers.length; i++) {
//         return listnOfNumbers(sum);
//     }
// }

// returnNumbersSum();


// შევქმნათ ფუნქცია რომელსაც გადაეცემა ობიექტების მასივი და აბრუნებს მასივს ამ ობიექტების name- propetry-ით

// const person = {
//     firstname: "Zuka",
//     age: 15
// }

// console.log(person.firstname);


//  შევქმნათ ობიექტი და გავუწეროთ მას 3 მეთოდი და 3 ფროფერთი 

// const person = {
//     firstname: "Zuka",
//     lastname: "qoridze",
//     age: 15,

//     printhello: function() {
//         console.log(this.firstname,"You name")
//     },

//     printlastname: function(){
//         console.log(this.lastname,"You lastname");
//     },

//     printage: function(){
//         console.log(this.age,"You age")
//     }

// }

function findMinMaxWords(text) {
    const words = text.split(' ').filter(word => word.length > 0);
    
    if (words.length === 0) return ["", ""];

    let minWord = words[0];
    let maxWord = words[0];

    words.forEach(word => {
        if (word.length < minWord.length) {
            minWord = word;
        }
        if (word.length > maxWord.length) {
            maxWord = word;
        }
    });

    return [minWord, maxWord];
}


const text = "ეს არის ერთ-ერთი ტესტი ტექსტისთვის JavaScript-ში";
console.log(findMinMaxWords(text)); 