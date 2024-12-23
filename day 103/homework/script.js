function checkPassword(){
    const password = document.getElementById("pas").value;

    if(password.length >= 10 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        password.style.backgroundColor = "green"
        alert("პაროლი ძლიერია")
        return true
    } else if(password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
        alert("დააყენე უფრო ძლიერი პაროლი")
        password.style.backgroundColor = "orange"
        return false
    } else if(password.length >= 6) {
        alert("პაროლი ძალიან მარტივია")
        password.style.backgroundColor = "red"
        return false
    }
}


// შექმენით ფორმა პაროლის შეყვანისთვის:
// ველი, სადაც მომხმარებელი შეყვანს პაროლს.
// პაროლის სიძლიერის შეფასების ვიზუალური გამოსახვა (მაგალითად, ტექსტი ან ფერის შეცვლა).
// ვალიდაციის წესები:
// სიძლიერე (მდაბალი, საშუალო, ძლიერი) უნდა განისაზღვროს შემდეგი კრიტერიუმებით:
// მდაბალი:
// მინიმუმ 6 სიმბოლო.
// საშუალო: 
// მინიმუმ 8 სიმბოლო.
// უნდა შეიცავდეს ერთ რიცხვს ან ერთ დიდ ასოს.
// ძლიერი:
// მინიმუმ 10 სიმბოლო.
// უნდა შეიცავდეს ერთ დიდ ასოს, ერთ რიცხვს და ერთ სპეციალურ სიმბოლოს (მაგ., !@#$%).
// რეალური დროის ვალიდაცია:
// გამოიყენეთ oninput, რათა პაროლი შეამოწმოთ მაშინვე, როდესაც მომხმარებელი შეყვანას აკეთებს.
// სტილის ცვლილება:
// ძლიერი პაროლის დროს ფონი უნდა გახდეს მწვანე.
// საშუალო პაროლის დროს ფონი უნდა გახდეს ყვითელი.
// დაბალი პაროლის დროს ფონი უნდა გახდეს წითელი.