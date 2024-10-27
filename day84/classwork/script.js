// const firstP = document.getElementById("first");
// const secondP = document.getElementById("second");

// document.body.children[1].style.color = 'blue'


const first = document.getElementById("idfirst");

first.addEventListener("click",function(){
    console.log("Zuka qoridze")
})

const names = document.getElementsByClassName("zukaclass");

for(let i = 0; i < names.length; i++) {
    names[i].style.color = "green";
}
console.log(names)

// 2) შექმენით html პარაგრაფი და მიანიჭეთ ID ხოლო შექმენით სამი ახალი პარაგრაფი და მიანიჭეთ მათ ერთი class, შემდეგ .js ფაილში for loop ის გამოტყენებით შეცვალეთ ამ პარაგრაფერის შინაარსი და ფერი. ელემენტს რომელსაც მიანიჭებს ID უნდა მისცეთ on click eventListiner გამოიტანოს მოსწავლის სახელი და გვარი. 