// 10 Simple Constructor Exercises
// Basic Constructor with Properties
// Create a Person constructor with properties name and age.
// Add a method introduce() that logs:
// "Hi, I am <name> and I am <age> years old."

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     this.introduce = function() {
//         console.log("hi im am" + name + "and i am" + age + "years old");
//     };
// };

// const info = new Person("Zuka",15);

// ---

// Constructor with Default Parameter Value
// Create a Book constructor with parameters title and author.
// If no author is provided, set it to "Unknown".
// Add a method getDetails() to print the book's details.

// function Book(litle, author){
//     this.litle = litle;
//     this.author = author;


//     this.getDetails = function() {
//         if(author === undefined) {
//             console.log("Unknown")
//         }
//     }
// };

// const books = new Book("Capitan","jack");

// ---

// Constructor with Arrays
// Create a Classroom constructor that takes an array of students.
// Add a method countStudents() to log the number of students in the array.

// function Classroom(students, num){
//     const num = [1,2,3,4,5,6,7,8,9,10]

//     this.num = num;
//     this.students = students;

//     this.countStudents = function(){
//         console.log(this.num,this.students)
//     }
// };

// const lg = new Classroom("Zuka,lika,gigi");


// ---

// State Management with Constructor
// Create a Counter constructor with an initial value of 0.
// Add methods increment() and getValue() to increase the counter by 1 and retrieve the current value.

// function Counter(num){

//     this.getValue = function(){
//             this.num.value = 0,num;
//     }

//     this.increment = function(){
//             num++
//     }
// }

// ---

// Constructor with Boolean State
// Create a Light constructor with a state property initialized to "off".
// Add a method toggle() to switch the state between "on" and "off".

// function Light(initialized){
//     this.initialized = initialized;

//     this.toggle = function(){
//         console.log("on","of")
//     }
// }

// ---

// Product Constructor with Properties
// Create a Product constructor with properties name and price.
// Add a method getDetails() to log:
// "Product: <name>, Price: <price> USD"

// function Product(name, price){
//     this.name = name;
//     this.price = price;

//     this.getDetails = function(){
//         console.log("Product")
//     }
// }

// ---

// Constructor with Object Properties
// Create a User constructor with properties username and contact (an object containing email and phone).
// Add a method getContactInfo() to print the user’s contact information.

// function Object(username, contact, email, phone){
//     this.username = username;
//     this.contact = contact;
//     this.email = email;
//     this.phone = phone;

//     this.getContactInfo = function(){
//         console.log(this.username,this.contact,this.email,this.phone)
//     }
// }

// const inf = new Object("Zuka",574521083,"zuraqoridze988@gmail.com",57324087);

// ---

// Constructor with Array of Objects
// Create a Library constructor that takes an array of book objects (each with title and author).
// Add a method listBooks() to print all books in the library.

// function Library(books,author){
//     this.books = books;
//     this.author = author;

//     this.listBooks = function(){
//         console.log(this.books,this.author)
//     }
// }

// const info = new Library("any1","any2");
// const info2 = new Library("any2","any3");
// const info3 = new Library("any4","any5");
// console.log(info);
// console.log(info2);
// console.log(info3);
// ---

// Cart Constructor with Array Management
// Create a Cart constructor with an empty items array.
// Add methods addItem(item) to add an item and getItems() to print all items.

// function Cart(items){
//     this.items = items;

//     this.addItem = function(){
//         console.log(this.items)
//     }
// }

// const inf = new Cart("idk0")
// const inf2 = new Cart("idk1")
// const inf3 = new Cart("idk2")
// const inf4 = new Cart("idk3")
// console.log(inf)
// console.log(inf2)
// console.log(inf3)
// console.log(inf4)
// ---

// Conditional Logic in Constructor
// Create a Student constructor with properties name and marks (an array of numbers).
// Add a method hasPassed() that returns true if the average mark is 50 or above, otherwise false.

// function Student(mark,name){
//     this.name = name;
//     this.mark = mark;

//     this.hasPassed = function(){
//         if(mark >50 || 50){
//             return true
//         }else{
//             return false
//         }
//     }
// }

// const inf = new Student(50,"random")
// console.log(inf)