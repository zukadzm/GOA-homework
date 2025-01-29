class Animal{
    constructor(name, age, diet) {
        this.name = name;
        this.age = age;
        this.diet = diet;
    }

    get description(){
        return `${this.name} age is ${this.age} and diet ${this.diet}`
    }
    
    cardCR(){
       const fname = document.createElement("h2");
       fname.textContent = `Name: ${this.name}`

       const Aage = document.createElement("h2");
       Aage.textContent = `Age: ${this.age}`

       const Ddiet = document.createElement("h2");
       Ddiet.textContent = `Diet: ${this.diet}`;

       const animalInfo = document.createElement("div");

       animalInfo.appendChild(fname);
       animalInfo.appendChild(Aage);
       animalInfo.appendChild(Ddiet)
    }
}


const animal = [
    new Dog("Dog", 7, false),
    new Cat("Cat", 5, true),
    new Lion("Lion", 20, false)
]
