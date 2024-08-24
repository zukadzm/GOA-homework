const namee = document.getElementById("Name").value
const email = document.getElementById("Email").value
const password = document.getElementById("password").value
const sumbit = document.getElementById("sumbit").value
const form = document.getElementById("form").value

const p = document.getElementById("par")

if(namee === '',email === '',password === '') {
    p.textContent = 'Correct'
}
else {
    p.textContent = 'Wrong'
}

// <!-- შექმენით HTML-ში ფორმა სადაც მომხმარებელს შემოატანინებთ თავის სრულ სახელს, ემაილს, პაროლს. შემდეგ javascirpt-ის დახმარებით როდესაც sumbit ღილაკზე დაკლიკება მოხდება შეამოწმეთ ყველა ველი შევსებულია თუ არა ამისთვის ფორმიდან ყველა შესატანი ველის მნიშვნელობა value კუთვნილება წამოიღეთ და შეამოწმეთ არის თუ არა ცარიელი string, შესაბამისად დაუბეჭდეთ რომ ყველა ველი შევსებულია ან არ არის შევსებული, თუ შევსებულია კონსოლში დაბეჭდეთ მონაცემები. კომენტარებით ახსენით ყველაფერი (დაგჭირდებათ ფუნქციები და if პირობითი განცხადება) -->