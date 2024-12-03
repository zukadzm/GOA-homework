const box1 = document.getElementById("bx1"); // box1 არის ციფრი 3
const box2 = document.getElementById("bx2"); // box2 არის ცირფრი 1
const box3 = document.getElementById("bx3"); // box3 არის ცირფრი 2
const button = document.getElementById("btn");
const reverseButton = document.getElementById("backBtn");
function move(){
    box1.style.opacity = 0.3
    box3.style.opacity = 0.3

    button.addEventListener("click",function(){
        box2.style.opacity = 0.3
        box2.style.position = "absolute"
        box2.style.marginRight = "900px"
        box1.style.position = "absolute"
        box1.style.marginLeft = "900px"
        box1.style.transition = "1s"
        box2.style.transition = "1s"
        box3.style.transition = "1s"
        box3.style.opacity = 1
        button.addEventListener("click",function(){
            box2.style.marginLeft = "1784px"
            box3.style.marginRight = "900px"
            box1.style.marginRight = "903px"
            box1.style.opacity = 1;
            box3.style.opacity = 0.3
        })
    })
}
move()