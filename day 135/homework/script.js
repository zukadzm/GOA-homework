// შექმენით ვებსაიტი ორი input ველით და ღილაკით. ღილაკზე დაკლიკების დროს გამოიტანეთ (console.log ან ვებსაიტზე დარენდერება) პირველ ინფუთში შეყვანილი მესიჯი მეორე ინფუთში შეყვანილ მილიწამში. მაგ: 'hello', 1000, --> ერთ წამში გამოვიდეს 'hello'. თუმცა უნდა შეგეძლოთ რამოდნეიმე მესიჯის ერთდროულად შეყვანა მაგრამ ეს მესიჯები ერთმანეთიდ მორჩენას უნდა დაელოდონ. მაგ: თუ შეიყვანეთ ('hello', 8000) და 3 წამის მერე შეიყვანეთ ('bye', 1000) bye არ უნდა გამოვიდეს 1 წამში შეყვანის შემდეგ, არამედ 6 წამში ( 5 წამი hellos მოცლა +1 წამი ). ეს ლოგიკა უნდა მუშაობდეს ბევრ მესიჯზეც არა მხოლოდ ორზე. ( დავალება საკმაოდ რთულია და შეიძლება მოითხოვოს რეკურსიის გამოყენება,  არაუშავს თუ ვერ გააკეთეთ, ❤️ ყველა მცდელობა მისაღებია❤️  )
// (っ•̀ᴗ•́)っ ✨ წარმატებები ❤️🔥💪

const input1 = document.getElementById("input1").value;
const input2 = document.getElementById("input2").value;
const button = document.getElementById("btn");
const button2 = document.getElementById("btn2");
const p = document.getElementById("display")
function timeListener(){
    button.addEventListener("click",function(e){
        e.preventDefault()
        setTimeout(input1 =>{
            p.textContent = input1.value
        },1000)
    })

    button2.addEventListener("click",function(e){
        e.preventDefault()
        setTimeout(input2 => {
            p.textContent = input2.value
        })
    })
}
timeListener()