// 1) შექმენით კონსტრუქტორი, რომელსაც ექნება 5 პარამტერი, ამ კონსტრუქტორის დახმარებით შექმენით 5 სხვადასხვა ობიექტი, კომენტარებით ახსენით რა არის კონსტრუქტორი და რას აკეთებს new კეივორდი. (კომენტარები აუცილებელია)

// function Person(firstname,surname,city,sister,brother){
//     this.firstname = firstname;
//     this.surname = surname;
//     this.city = city;
//     this.sister = sister;
//     this.brother = brother;
// };

// const person1 = new Person("Zuka","Qoridze","Samtredia","Lika","gigi");
// const person2 = new Person("zuka1","qoridze1","samtredia1","lika1","gigi1");
// const person3 = new Person("zuka2","qoridze2","samtredia2","lika2","gigi2");
// const person4 = new Person("zuka3","qoridze3","samtredia3","lika3","gigi3");
// const person5 = new Person("zuka4","qoridze4","samtredia4","lika4","gigi4");
// console.log(person1);
// console.log(person2);
// console.log(person3);
// console.log(person4);
// console.log(person5);
// this - ეს ობიექტი, ქმნის ცარიელ ობიექტს
// new - keywoard ქმნის ახალ ობიექტს



// 1)Create a constructor function Person that takes two parameters: name and age.
// Add a method introduce() that logs:
// "Hi, I am <name> and I am <age> years old."

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.introduce = function() {
//         console.log("Hi, I am" + this.name, "And I am" + age + "Yeats old")
//     }
// }

// 2)Create a constructor function Car with parameters brand and year.
// If the year isn't provided, set a default value of 2020.
// Add a method describe() to print:

// function car(brand, year = 2020){
//     this.brand = brand;
//     this.year = year
//     this.describe = function() { 
//         console.log(this.brand,this.year)
//     }
// }

// 3) Create a Library constructor that takes name and an array of books.
// Add a method listBooks() to log all books.

// function Library(name, books) {
//     this.name = name;
//     this.books = books;
//     this.listbook = function() {
//         console.log(this.name,this.books)
//     }
// }

// 4) Create a Rectangle constructor with parameters width and height.
// Add a method area() that returns the area of the rectangle.

// function Rectangle(width, height) {
//     this.width = width;
//     this.height = height;
//     this.area = function() {
//         return this.width * this.height;
//     }
// }

// 5) Create a Student constructor that takes name and marks (an array of numbers).
// Add a method hasPassed() that returns true if the average of marks is 50 or above; otherwise, false.

// function Student(name, marks) {
//     this.name = name;
//     this.marks = marks;
//     this.hasPassed = function() {
//         if(name||marks > 50) {
//             return true;
//         }else {
//             return false;
//         }
//     }
// }


// 6)Create a Counter constructor with an initial value of 0.
// Add methods increment() and getValue() to increase the counter by 1 and retrieve the current value, respectively.

// function Counter(name, initial = 0){
//     this.name = name;
//     this.initial = initial;
//     this.increment = function() {
//         this.initial++;
//     }

// 7) Create a Phone constructor that takes an object parameter with brand, model, and price.
// Add a method info() to print the phone’s details:
// "This is a <brand> <model> priced at <price> USD."

// function Phone(name, model, price) {
//     this.name = name;
//     this.model = model;
//     this.price = price;
//     this.info = function() {
//         console.log("this is a name" + name + model + "priced at" + price + "USD")
//     }
// }