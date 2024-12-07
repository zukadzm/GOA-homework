// 1) შექმენით ფორმა და ცხრილი, ფორმაში იქონიეთ 4 შესატანი ველი, მომხმარებლმა უნდა შემოიტანოს სახელი, იმეილი, პაროლი და ფბ ლინკი, როდესაც ფორმა დადასტურდება როგორც იცით გვერდი ავტომატურად დარეფრეშდება, გათიშეთ ეს ქმედება preventDefault() მეთოდის დახმარებით, დადასტურების შემდეგ წამოიღეთ შემოტანილი მნიშვნელობები ინფუთებიდან name ატრიბუტის დახმარებით, ყოველ დადასტურებაზე ცხრილში შექმენით ახალი რიგი და დაამატეთ ეს მნიშვნელობები, რომელიც გამოჩნდება გვერდზე

// const form = document.querySelector("form"); // პირველივე შემხვედრი form წამოიღებს
// const tdbody = document.querySelector("tbody"); // აქ წამოვიღე tbody რომ აქ ჩავამატო ახალი tr,td

// form.addEventListener("submit",function(ev){ // აქ როდესაც მოხდება შესრულება შეყვანის ანუ როდესაც მომხმარებელი დააჭერს submit ღილაკს ანუ როდესაც დაადასტურებს, შემდეგ ფუნცქციას გადავეცი 1 პარამეტრი იმისთვის რომ გამოვიყენო preventDefault რომ არ დარეფრეშდეს საიტი.
//     ev.preventDefault();

//     const fname = form.firstname.value; // აქ წამოვიღე ფორმიდან firstname input ის value
//     const email = form.mail.value;
//     const password = form.pass.value;
//     const fblink = form.link.value;

//     const infoUser = [fname,email,password,fblink]; // აქ შევინახე მასივში მომხმარებლის შემოტანილი მნიშვნელობები

//     const tr = document.createElement("tr"); // აქ შევქმენი tr თეგი რომ ჩავამატო შიგნით მომხმარებლის შემოტანილი მნიშვნელობა ჯერ td უნდა ჩავამატო
    
//     for(let i = 0; i <  infoUser.length; i++){ // აქ გავიგე ინდექსები for ციკლის გამოყენებით
//         const td = document.createElement("td"); // აქ შევქმენი td თეგი რომ ჩავამატო მომხმარებლის შემოტანილი მნიშვნელობა
//         td.textContent = infoUser[i]; // აქ td ში ჩავამატე მომხმარებლის შემოტანილი მნიშვნელობები მასივის გამოყენებით

//         tr.appendChild(td); // tr თეგში დავამატე td თეგი რომ გამოიტანოს მომხმარებლის შემოტანილი მნიშვნელობები
//     } 

//     tdbody.appendChild(tr);
// })

// 2) შექმენით პროექტი სახელწოდებით todolist, გექნებათ ერთი ფორმა და ერთი დალაგებული სია, როდესაც ფორმა დადასტურდება წამოიღეთ დასამატებელი  მნიშნელობა და შექმენით ახალი li თეგი რომელსაც მიანეჭბთ დადასტურებულ მნიშვნელობას, ახალ უნიკალურ id_ს და მოვლენის მსმენელს რომელიც მოუსმენს დაკლიკების მოვლენას, როცა დაკლიკება მოხდება უნდა წაიშალოს კონკრეტულად ის ელემენტი რომელზეც მოხდა მოვლენა

const form = document.querySelector("form");
const ol = document.querySelector("ol");

let count;

function deleteItem(id) {
    const item = document.getElementById(id); // აქ  id წამოვიღე getElementById - ის დახმარებით
    ol.removeChild(item); // აქ უკვე მე შევქმენი ის რომ წაიშალოს მაგრამ ჯერ არ დამიმატებია მოსმენა ანუ როცა დააჭერს მაშინ რომ მოხდეს წაშლა
}

form.addEventListener("submit",function(e){ // აქ ფუნქციას გადავეცი 1 პარამტეტრი იმისთვის რომ გამოვიყენო preventDefault
    e.preventDefault(); // აქ უკვე გამოვრთე საიტზე რეფრეში

    const valueItem = form.item.value; // აქ წამოვიღე item ის მნიშვნელობა

    const li = document.createElement("li"); // აქ შევქმენი li თეგი სადაც ჩაიწერება მომხმარებლის შემოტანილი მნიშნელობვაა

    li.textContent = valueItem; // აქ ანუ li თეგში გამოვიტანოთ მომხმარებლის შემოტანილი მნიშვნელობები

    li.id = `item-${count}` // აქ დაითვლის

    li.onclick = function(){
        deleteItem(li.id) // როდესაც მომხმარებელი დააჭერს შემოტანილ სახელს ან რაიმეს item ს ის მაშინ წაიშალოს ანუ onclick თან გამოვიძახე ფუნქცია
    }

    count++; // აქ იმატებს 1 ერთით

    ol.appendChild(li); // აქ დალაგებულ სიაში ვამატებ li თეგს მომხმარებლის შემოტანილს
})