const scoreButton = document.getElementById("scoreButton");
const p = document.getElementById("result");
const gadjet1Button = document.getElementById("gadjet1");
const gadjet2Button = document.getElementById("gadjet2");
const gadjet3Button = document.getElementById("gadjet3");

let gold = 0;

function onclickPlusOne(){
    scoreButton.addEventListener("click",function(){
        gold++; // ანუ მოიმატოს 1 ყოველ დაჭერაზე
        p.textContent = `gold ${gold}`
    })
}
onclickPlusOne()

function buyFirstGudjet(){
    gadjet1Button.addEventListener('click', () => {
            if(gold >= 50) {
                alert("გილოცავ შენ იყიდე პირველი გაჯეტი ეხლა უფრო სწრაფად ააგროვებ gold-ებს")
                scoreButton.addEventListener('click', () => {
                    gold += 1;
                    p.textContent = `gold ${gold}`;
                
                if(gold < 50) {
                    scoreButton.addEventListener('click', () => {
                        gold++;
                        p.textContent =`gold ${gold}`;
                    })
                }}) 
            }
    })
}
buyFirstGudjet()

function buySecondGudjet(){
    gadjet2Button.addEventListener('click', () => {
            if(gold >= 200) {
                alert("გილოცავ შენ იყიდე მეორე გაჯეტი ეხლა უფრო სწრაფად ააგროვებ gold-ებს")
                scoreButton.addEventListener('click', () => {
                    gold += 1;
                    p.textContent =`gold ${gold}`;
                
                if(gold < 200) {
                    scoreButton.addEventListener('click', () => {
                        gold++;
                        p.textContent =`gold ${gold}`;
                    })
                }}) 
            }
    })
}
buySecondGudjet()


function buyThirdGudjet(){
    gadjet3Button.addEventListener('click', () => {
            if(gold >= 400) {
                alert("გილოცავ შენ იყიდე ბოლო-მესამე გაჯეტი ეხლა უფრო სწრაფად ააგროვებ gold-ებს")
                scoreButton.addEventListener('click', () => {
                    gold += 1;
                    p.textContent = `gold ${gold}`;
                
                if(gold < 400) {
                    scoreButton.addEventListener('click', () => {
                        gold++;
                        p.textContent = `gold ${gold}`;
                    })
                }}) 
            }
    })
}
buyThirdGudjet()