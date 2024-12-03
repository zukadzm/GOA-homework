const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");


function sort(){
    box1.style.opacity = 0.3;
    box3.style.opacity = 0.3;


    button1.addEventListener("click",function(){
        box1.style.marginLeft = "510px";
        box2.style.marginRight = "999px"
        box2.style.position = "absolute"
        box1.style.opacity = 1;
        box2.style.opacity = 0.3;
        box1.style.transition = "2s"
        box2.style.transition = "2s"
        button2.addEventListener("click",function(){
            box1.style.marginRight = "510px";
            
        })
    })

}
sort()