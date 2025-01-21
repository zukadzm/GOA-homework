// 1) შექმნით ცხოველის, მაქანის და ადამიანისკლასი, თითოეული სამი property-თ და ერთი მეთოდით. თითოეული კლასიდან შექმენით სამ-სამი -ობიექტი და გამოიტანეთ ისინი კონსოლში.
// წარმატებები (•‿•)

class Animal {
    constructor(fname, age, from) {
        this.fname = fname;
        this.age = age;
        this.from = from;
    }
    get infoAnimal(){
        return `${this.fname} არის ${this.age} წლის, ცხოვრობს${this.from}`
    }
}

class Car {
    constructor(brand, model, engine) {
        this.brand = brand;
        this.model = model;
        this.engine = engine;
    }
    get infoCar(){
        return `მანქანის ბრენდი არის ${this.brand} და ${this.model}-მოდელი, ${this.engine}-ძრავი`
    }
}

class Human {
    constructor(firstname, surname, age) {
        this.firstname = firstname;
        this.surname = surname;
        this.age = age;
    }
    get humanInfo(){
        return `${this.firstname, this.surname} - არის ${this.age} წლის`
    }
}

const animal1 = new Animal("ბობი", 14, "საქართველო")
const animal2 = new Animal("ბობი2", 15, "საქართველო")
const animal3 = new Animal("ბობი3", 16, "საქართველო")

console.log(animal1.infoAnimal)
console.log(animal2.infoAnimal)
console.log(animal3.infoAnimal)

const car1 = new Car("BMW","E36",3.5)
const car2 = new Car("TOYOTA","RAV4",3.5)
const car3 = new Car("VOLSWAGEN","Jetta",2.5)

console.log(infoCar.car1)
console.log(infoCar.car2)
console.log(infoCar.car3)

const human1 = new Human("ზუკა","ქორიძე",15)
const human2 = new Human("გიორგი","თავაძე",17)
const human3 = new Human("თორნიკე","ბოლქვაძე",15)

console.log(humanInfo.human1)
console.log(humanInfo.human2)
console.log(humanInfo.human3)