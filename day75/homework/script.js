const form = document.getElementById("myForm");

//  <!-- 2) შექმენით საიტი სადაც გექნებათ სარეგისტრაციო ფორმა. მომხარებელს უნდა შემოატანინოთ სახელი, ემაილი, პაროლი და გამოუტანოთ checkbox-ი. ფორმა არ დადასტურდეს იქამდე სანამ მომხარებელი არ მონიშნავს ჩექმბოქსს. შეამოწმეთ არის თუ არა ინფუთები ცარიელი. თუ კი გამოუტანეთ გამაფრთხილებელი მესიჯი და გათიშეთ ფუნქცია, ხოლო თუ მომხარებელმა ყველაფერი სწორად შეიყვანა გამოიტანეთ ინფუთების მნიშვნელობა კონსოლში -->

// function Check(){
//     let firstname = form.elements.name.value;
//     let emil = form.elements.email.value;
//     let password = form.elements.password.value;
//     let checkbox = form.elements.checkbx.value;
//     let button = form.elements.btn.value;


//     if(firstname === '' || emil === '' || password === '') {
//         alert("please fill");
//         return false;
//     }

//     if(!checkbox.Check) {
//         alert("please agree");
//         return false;
//     }

// }
// Check()
// 
// 3) შექმენით საიტი სადაც იქნება სარეგისტრაციო ფორმა, რომელსაც ექნება სამი შესაყვანი ველი. სახელი ემაილი და პაროლი. ასევე მომხარებელს აარჩევნიეთ თავისი სქესი(გამოიყენეთ radio-ს ტიპის ინფუთები და გადაეცეით მათ ერთნაირი name ატრიბუტი). შექმენით ფუნქცია, რომელიც წამოიღებს ფორმიდან მონაცემებს. შეამოწმეთ პაროლის სიგრძე. თუ ნაკლებია 8 სიმბოლოზე, მომხარებელს გამოუტანეთ ალერტ მესიჯი: Password is to short, სხვა შემთხვევაში შექმენით ობიექტი, რომელსაც გადასცემთ შემოტანილ მნიშვნელობებს, ხოლო ეს ობიექტი უნდა ჩაამატოთ სიაში სახელად dateBase, რომელიც ფუნქციის გარეთ იქნება შექმნილი და მასში ყოველი ახალი ობიექტის დამატების შემდეგ კონსოლში გამოიტანეთ ეს მასივი



// 3) შექმენით საიტი სადაც იქნება სარეგისტრაციო ფორმა, რომელსაც ექნება სამი შესაყვანი ველი. სახელი ემაილი და პაროლი. ასევე მომხარებელს აარჩევნიეთ თავისი სქესი(გამოიყენეთ radio-ს ტიპის ინფუთები და გადაეცეით მათ ერთნაირი name ატრიბუტი). შექმენით ფუნქცია, რომელიც წამოიღებს ფორმიდან მონაცემებს. შეამოწმეთ პაროლის სიგრძე. თუ ნაკლებია 8 სიმბოლოზე, მომხარებელს გამოუტანეთ ალერტ მესიჯი: Password is to short, სხვა შემთხვევაში შექმენით ობიექტი, რომელსაც გადასცემთ შემოტანილ მნიშვნელობებს, ხოლო ეს ობიექტი უნდა ჩაამატოთ სიაში სახელად dateBase, რომელიც ფუნქციის გარეთ იქნება შექმნილი და მასში ყოველი ახალი ობიექტის დამატების შემდეგ კონსოლში გამოიტანეთ ეს მასივი 

const formm = document.getElementById("formm");

function chkc() {
    let firstname = formm.elements.name.value;
    let email = formm.elements.email.value;
    let password = formm.elements.password.value;
    let gender = formm.elements.male.value;

    if(password < 8) {
        alert("Password is too short");
        return false;
    }
}
chkc()

let dateBase = {
    fname: firstname,
    email: email,
    password: password,
    gender: gender
}

console.log(dateBase);