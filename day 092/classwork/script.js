// const myDiv = document.getElementById("div");

// let speed = 0;

// let t = setInterval(moves, 700);

// function moves(){
//     speed += 1;

//     myDiv.style.left = speed+"px";
//     myDiv.style.top = speed+"px";
//     myDiv.style.right = speed+"px";
//     myDiv.style.bottom = speed+"px";
// };

const box = document.getElementById("div2")
const button = document.getElementById("btn");
const button2 = document.getElementById("btn2");


function move(){
    button.onclick = function(){
        box.style.transform = 'translateY(-20px)';
    }
}

setInterval(move, 1000)

function down(){
    button2.onclick = function(){
        box.style.transform = 'translateY(5px)';
    }
}

setInterval(down, 500)



