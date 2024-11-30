const next = document.getElementById("nxt");
const prev = document.getElementById("prv");
const imageShow = document.getElementById("imgg");

currentIndex = 0;

const imgs = {
    'img1.png':
    'img2.png'
}

next.addEventListener("click",function(){
    for(let i = 0; i < imgs; i++) {
        currentIndex++;
        imageShow.innerHTML = 'img1.pn';
    }
})