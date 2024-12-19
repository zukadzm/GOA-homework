const buttonOpen = document.getElementById("openButton");
const secondContainer = document.getElementById("containerSecond");

const darkMode = document.getElementById("drkMode");
const ligthMode = document.getElementById("ligthMode");

darkMode.addEventListener("click",function(){
    document.body.style.backgroundColor = "black"
})

ligthMode.addEventListener("click",function(){
    document.body.style.backgroundColor = "white"
})



function styleBox(){
    secondContainer.style.width = 600+"px"
    secondContainer.style.height = 300+"px"
    secondContainer.style.backgroundColor = "gray"
    secondContainer.style.borderRadius = 12+"px"
    secondContainer.style.textAlign = "center"

    secondContainer.textContent = "EcmaScript - არის სტანდარტი რომელზეც პროგრამის ენა არის დაშენებული (პროგრამირების ენები). ECMAscript - ის კოდი არ არსებობს და არც ფაილი,  თუ პროგრამირება იცავს ECMAscript ის წესებს მაშინ ეს არის დაფუნძვლებული ECMAscript6 სზე,ECMAscript6 - არის 2016 წელს გამოშვებული რომელიც იცავს წესებს, ECMAscript - არ არის ცალკე(ახალი) პროგრამირების ენა და არც რაიმე ეგეთი, ECMAscript6 - არის 2016 წელს გამოშვებული რომელიც იცავს წესებს."
    secondContainer.style.color = "white"
    secondContainer.style.fontSize = 15+"px"
}

buttonOpen.addEventListener("click", ()=> {
    styleBox()
    secondContainer.style.transition = "2s"
})
