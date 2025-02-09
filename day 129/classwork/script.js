// 1) შექმენით პროგრამა რომელიც საშუალებას მოგვცემს დავიყოთ ჯგუფებად.
// function randomGroup(){
//     const leaders = ["Kote Ximshiashvili", "Davit Adeishvili", "Data Popxadze", "Gobron Witlauri", "Nata Kvantaliani", "Giorgi Shavadze"];
//     const members = [ 'mate chikaidze', 'giga kochalidze', 'zuka qoridze',  'gio mindorashvili', 'rati chigogidze', 'ilia iremadze', 'davit mefarishvili', 'lasha giorgi azaladze', 'luka tatuashvili', 'nika macharashvili', 'ilia dzindzibadze']

//     const leaderRandomizer = leaders[Math.floor(Math.random() * leaders.length)]
//     const membersRandomizer = members[Math.floor(Math.random() * members.length)]
    

//     return `ლიდერი ${leaderRandomizer}: ${membersRandomizer},${members[Math.floor(Math.random() * members.length)]}, ${members[Math.floor(Math.random() * members.length)]} - ბავშვები`
// }

// console.log(randomGroup())


// 2)

class Card{
    #pin
    constructor(money, pin, wirthday){
        this.money = money
        this.pin = pin;
        this.wirthday = wirthday;
    }
    set pin(new_pin){
        if(new_pin.length === 4) {
            this.new_pin = this.pin;
        } else {
            return false
        }
    }
    get wirthday(){
        const acsses = prompt("Enter your pinCode to wirthday your money")
        if(this.new_pin === acsses) {
            const howMuch = prompt("How much money do you want to wirthday")
            return this.money - howMuch
        }
    }
}