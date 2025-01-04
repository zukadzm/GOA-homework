// const ol = document.getElementById("oll").value;
// const button = document.getElementById("btn");
// const p = document.getElementById("res")

// function filters(){
//     const emails = [
//         { subject: "მოგზაურობა", content: "ნუ დაგავიწყდებათ თქვენი ბილეთები", receivedDate: "2024-12-15" },
//         { subject: "მოხსენება", content: "გთხოვთ, წაიკითხოთ ბოლო ანგარიში", receivedDate: "2024-12-12" },
//         { subject: "მოგზაურობა", content: "ძალიან კარგი შეთავაზება მაქვს", receivedDate: "2024-12-13" },
//         { subject: "გაცნობიერება", content: "შესაძლებელია მცირე შეცდომები", receivedDate: "2024-12-10" }
//       ];

//       button.addEventListener("click",function(){
//          const li = document.createElement("li")
//          li.appendChild(emails)
//          p.innerHTML = ``
//       })
// }
// filters()

// const obj = [
//     {firstname: "zuka",},
//     {surname: "qoridze",},
//     {age: 15}
// ]

// for(let i in obj) {
//     console.log(`${obj}: ${obj[i]}`)
// }

function countIndex(string){
    const result = {}
    
    for(let i of string) {
        if(result[i]) {
            result[i] += 1
        }
    }
}