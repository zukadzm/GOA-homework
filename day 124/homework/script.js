// სავარჯიშო 1:
// დაამატე initials getter, რომელიც დააბრუნებს პიროვნების ინიციალებს. თუ პიროვნება აქვს firstName და lastName properties, დააბრუნე მხოლოდ პირველი ასო ორივედან.

class Person {
    constructor(firstname, surname){
        this.firstname = firstname;
        this.surname = surname;
    }
    get initals(){
        return `${this.firstname[0]} ${this.surname[0]}`
    }
}

const person = new Person("Zuka", "Qoridze")
console.log(person.initals)


// სავარჯიშო 2:
// დაამატე ageInMonths getter, რომელიც დააბრუნებს პიროვნების ასაკს თვეებში (თუ პიროვნებას აქვს age property, რომელიც აჩვენებს მის ასაკს წლებით).

class Ages{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    get ageInMonths(){
        return this.age * 12 // 12 ანუ წელი
    }
}

const person2 = new Ages("Zuka","Qoridze",15);
console.log(person2.ageInMonths)

// სავარჯიშო 3:
// დაამატე isRetired getter, რომელიც დააბრუნებს true, თუ პიროვნება არის პენსიონერი (60 წლის ან მეტი), და false თუ არა.

class Personn{
    constructor(age){
        this.age = age;
    }
    get isRetired(){
        return this.age >= 60;
    }
}

const person3 = new Personn(60)
console.log(person3.isRetired)


// სავარჯიშო 4:
// დაამატე formattedPrice getter, რომელიც დააბრუნებს პროდუქტის ფასს ფორმატირებულად (მაგალითად, "$100.00").

class Pperson{
    constructor(product,  price){
        this.product = product;
        this.price = price;
    }
    get formattedPrice(){
        return `$${this.price}.00`
    }
}

const person4 = new Pperson("Vashli", 100)
console.log(person4.formattedPrice)

// დაამატე discountPrice getter, რომელიც დააბრუნებს ფასის შეღავათიან ვერსიას
// წარმატებები

class Persson{
    constructor(product,  price){
        this.product = product;
        this.price = price;
    }
    get discountPrice(){
        return `$${this.price / 2}.00 თქვენ შეგიმცირთად ფასი, ფასზე გაყოფილი 2 ჯერ `
    }
}

const person5 = new Persson("Vashli", 20)
console.log(person5.discountPrice)