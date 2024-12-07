// 1) შექმენით ფუნქცია სახელად filter, რომელსაც ექნება ერთი პარამეტრი სახელად numberArr, ამ პარამეტრს უნდა გადაეცემოდეს მასივი (იგივე სია), თვქენი დავალებაა გაფილტროთ მიღებული სია, ფუნქციაში შექმენით ერთი მასივი სახელად evenNUmbers გადაურეთ პარამეტრში ჩასმუილ მასივს for ციკლით და ყველა ლუწი რიცხვი დაამატეთ evenNumbers მასივში, საბოლოოდ კი დააბრუნეთ მასივი როდესაც მორჩება for ციკლის მუშაობა (evenNumbers მასივი სადაც იქნება მოცემული მხოლოდ ლუწი რიცხვები)


function filter(numberarr) {
    let evennumbers = {};
        for(let i = 0; i < numberarr.length; i++) {
            if(numberarr[i] %2 === 0) {
                evennumbers.push(numberarr[i]);
            }
        }
    return evennumbers;
}

let num = [1,2,3,4,5,6,7,8,9,10]
let evenNUmbers = filter(num)
console.log(evenNUmbers)
 
