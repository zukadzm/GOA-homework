// პირადი ველების შექმნა – შექმენი კლასი, რომელიც შეიცავს ერთ ან მეტ პირად ველს და უზრუნველყოს მათი ინკაფსულაცია.
// getter და setter მეთოდები – დაამატე getter და setter მეთოდები პირადი ველებისთვის, რათა მათთან წვდომა კონტროლდეს.
// მხოლოდ წაკითხვადი ველი – შექმენი კლასი, სადაც პირადი ველი შესაძლებელია მხოლოდ წაკითხვად იყოს და მისი შეცვლა კლასის გარედან შეუძლებელი იყოს. 
// შექმენი BankAccount კლასი - რომელსაც ექნება პირადი ველი #balance. დაამატე getBalance() მეთოდი, რომელიც აბრუნებს ბალანსს და deposit(amount) მეთოდი, რომელიც ანგარიშზე თანხას დაამატებს. ბალანსზე პირდაპირი წვდომა გარედან არ უნდა იყოს შესაძლებელი.
// (🔥◡🔥)🔥 წარამატებები! *:･ﾟ🌟.

class BankSystem{
    constructor(money){
        this.#balance = money;
    }
    #balance
    get Balance(){
        return this.#balance
    }

    set Despoit(amount){
        if(amount > 0){
            this.#balance += amount
            console.log("თანხის გამოტანამ წარმატებით ჩაიარა :) ")
        } else {
            console.log("ვერ მოხერხდა თანხის გამოტანა")
        }
    }
}

const bank = new BankSystem(100)
bank.Despoit(50)
console.log(bank.Balance()); 