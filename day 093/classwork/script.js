const first = document.getElementById("hvr");
const p = document.getElementById("text");

first.addEventListener("mouseenter",function(){
    p.textContent = "Michael Gerard Tyson (born June 30, 1966) is an American professional boxer who professionally debuted in 1985. Nicknamed in his early career, and later known as,[5] Tyson is regarded as one of the greatest heavyweight boxers of all time.[6] He reigned as the undisputed world heavyweight champion from 1987 to 1990. Tyson won his first 19 professional fights by knockout, 12 of them in the first round."
})

first.addEventListener("mouseleave",function(){
    p.textContent = "Michael Gerard Tyson (born June 30, 1966) is an American professional boxer who professionally debuted in 1985."
})

const second = document.getElementById("hvr2");
const p2 = document.getElementById("text2");

second.addEventListener("mouseenter",function(){
    p2.textContent = " He began his career posting videos on Vine in September 2013 and had amassed 5.3 million followers and 2 billion views before the app discontinued. As an actor, he played Dirk Mann on the Disney Channel series Bizaardvark (2016–2018). Paul launched his YouTube channel in May 2014, and has ranked on the Forbes list as one of the highest paid "
})

second.addEventListener("mouseleave",function(){
    p2.textContent = "Jake Joseph Paul (born January 17, 1997)[1] is an American YouTuber, actor and professional boxer.";
})

const third = document.getElementById("hvr3");
const p3 = document.getElementById("text3");

third.addEventListener("mouseenter",function(){
    p3.textContent = " songwriter, dancer, and philanthropist. Dubbed the, he is regarded as one of the most significant cultural figures of the 20th century. Over a four-decade career, his contributions to music, dance and fashion, along with his publicized personal life, made him a global figure in popular culture. Jackson influenced artists across a variety of musical styles. Through visual presentation, he popularized street dance moves such as the moonwalk, to which he gave the name, and the robot."
})

third.addEventListener("mouseleave",function(){
    p3.textContent = "Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer."
})


const buttonDarkMode = document.getElementById("btn");

buttonDarkMode.addEventListener("click",function(){
    document.body.style.backgroundColor = "black";
})

const buttonLightMode = document.getElementById("bnt2");

buttonLightMode.addEventListener("click",function(){
    document.body.style.backgroundColor = "white";
})