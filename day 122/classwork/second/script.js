class Animal {
    constructor(name){
        this.name = name
    }
    get Makesound(){
        return `${this.name} making sound`
    }
}

class Dog extends Animal{
    constructor(name, bark) {
        super(name)
        this.bark = bark;
    }
    get Dogbark(){
        return `${this.name} making bark ${this.bark}`
    }
}

class Cat extends Dog {
    constructor(name, bark, meow){
        super(name,bark)
        this.meow = meow;
    }
    get catDog(){
        return `${this.name} not bark ${this.bark} but his Meow ${this.meow}`
    }
}

const animal = new Animal("ANY Animal")
animal.Makesound()

const dog = new Dog("BOBY", true)
dog.Makesound()
dog.Dogbark()

const cat = Cat("Any", false, true)
cat.Makesound()
cat.Dogbark()
cat.catDog()