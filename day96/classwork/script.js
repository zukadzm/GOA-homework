// const first = document.getElementById("div1");
// const second = document.getElementById("div2");
// const third = document.getElementById("div3");
// const fourth = document.getElementById("div4");
// const last = document.getElementById("div5");


// const button = document.getElementById("btn");

// second.addEventListener("click",function(e){
//     e.stopPropagation()
// })

// fourth.addEventListener("click",function(e2){
//     e2.stopPropagation
// })


const firstt = document.querySelectorAll("div1");
const button = document.getElementById("btn");

const first = document.getElementById("div1");
const second = document.getElementById("div2");
const third = document.getElementById("div3");
const fourth = document.getElementById("div4");
const last = document.getElementById("div5");

first.addEventListener("click",function(){
    for(let i = 0; i < firstt.length; i++) {
        if(firstt %3 === 0) {
            console.log("This are კენტი")
        } else{
            e.stopPropagation()
        } 
    }
})

second.addEventListener("click",function(e){
    for(let i = 0; i < firstt.length; i++) {
        if(firstt %2 === 0) {
            console.log("This are ლუწი")
        } else{
            e.stopPropagation()
        } 
    }
})

third.addEventListener("click",function(){
    for(let i = 0; i < firstt.length; i++) {
        if(firstt %3 === 0) {
            console.log("This are კენტი")
        } else{
            e.stopPropagation()
        } 
    }
})

fourth.addEventListener("click",function(e2){
    for(let i = 0; i < firstt.length; i++) {
        if(firstt %2 === 0) {
            console.log("This are ლუწი")
        } else{
            e.stopPropagation()
        }
    }
})

last.addEventListener("click",function(){
    for(let i = 0; i < firstt.length; i++) {
        if(firstt %2 === 0) {
            console.log("This are კენტი")
        } else{
            e.stopPropagation()
        } 
    }
})