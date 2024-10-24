// 1) შექმენით ტაიმერი რომელიც დაითვლის 20 იდან 0 ის ჩათლით, თითოეული გასული წამი გამოიტანეთ ვებგვერდზე,  html ში შექმენით ერთი პარაგრაფი და ყოველ ერთ წქამში შეცვალეთ პარაგრაფის ტექსტ კონტენტი და გამოიტანეთ წამები, გამოიყენეთ setInterval

const p = document.getElementById("count");

const seconds = 20;

const all = setInterval(function() {
    p.textContent = seconds;
    seconds--; // აქ ანუ გამოაკლედ ყოველ 1 წამში 1 წამი 1000ms === 1s
    console.log(seconds) // ანუ აქ ამადა ამდენი წამია დარჩენილი
    clearInterval(all); // აქ ანუ ვსიო გაჩერდეს ჩვენი ფუნქციის მუშაობა
    if(seconds === 0) { // აქ ანუ როცა 0 წამზე მივა
        console.log("Your count has ended"); // უთხრას მომხმარებელს რომ მორჩა თვლა
    };
}, 1000);

