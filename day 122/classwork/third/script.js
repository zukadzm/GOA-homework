// შექმენით მანქანის და ელექტტონული მანქანის კლასი, გამოიყენეთ extends. ელექტროუნული კლასში შეცვალეთ ერთი მისი მშობელის მეთოდი და მეორე მეთოდზე დააშენეეთ ახალი ფუნქციონალი

class Car{
    constructor(brand, model){
        this.brand = brand;
        this.model = model
    }
    get startEngine(){
        return `${this.brand} ${this.model} Engine Start`
    }
    get stopEngine(){
        return `${this.brand} ${this.model} Engine Stop`
    }
}

class ElecCar extends Car{
    constructor(brand, model, batery){
        super(brand,model)
        this.batery = batery;
    }
    get stopEngine(){
        return `${this.brand} ${this.model} Batery ${this.batery} Engine off`
    }
    get startEngine(){
        return `${this.brand} ${this.model} Batery ${this.batery} Engine On`
    }
}

