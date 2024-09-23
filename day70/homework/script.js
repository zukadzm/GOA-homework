// 3) html-ში აიღეთ ერთი პარაგრაფი, მას გაუწერეთ ტექსტი და id. js-ში წამოიღეთ ეს ელემენტი Id-ის გამოყენებით და ცვლადში შეინახეთ მისი textcontent. საბოლოოდ alert box-ში გამოიტანეთ ცვლადის მნიშვნელობა

// const p1 = document.getElementById("par1").textContent;

// console.log(p1)


// 4) html-ში შექმენით პარაგრაფი და პირდაპირ inline css-ით გაუწერეთ ფერი, ფონის ფერი, ფონტის სისქე და ფონტის ზომა. ეს ელემენტი js-ში წამოიღეთ id-ის გამოყენებით და შეინახეთ ცვლადში.

// შემდეგ შექმენით ობიექტი, რომელსაც ექნება 4 კუთვნილება: "color", "bg-color", "font-weight", "font-size" და თითოეულს მიანიჭეთ ამ ელემენტის შესაბამისი დიზაინი.

// hint: მაგალითად ფერის მისანიჭებლად უნდა დაუწეროთ შემდეგი მნიშვნელობა - document.getElementById("ელემენტის id").style.color

// const p2 = document.getElementById("par2")

// const all = {
//     color: "red",
//     "bg-color": "blue",
//     "font-weight": "bold",
//     "font-size": "24px"
// }


// 5) html-ში შექმენით div block და მასში მოათავსეთ სამი პარაგრაფი. js-ში წამოიღეთ ეს div block და შეცვალეთ მისი კუთვნილებები: განლაგება (display), სიგანე, სიმაღლე, ფონის ფერი.

const all = document.getElementById("ALL");

all.style.display = "flex";
all.style.width = "50px";
all.style.height = "50px";
all.style.backgroundColor = "White";
