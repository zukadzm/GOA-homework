const submitButton = document.getElementById("submit");
const plus = document.getElementById("pl");
const minus = document.getElementById("mn");


class MiniCalculator{
    static add(){
        plus.addEventListener("click",function(){
            const inputNum = document.getElementById("inputNum").value;
            const inputSnum = document.getElementById("secondNum").value;

            const result = document.getElementById("resultt").textContent = `${inputNum + inputSnum}`
        })
    }
    static mins(){
        minus.addEventListener("click",function(){
            const inputNum = document.getElementById("inputNum").value;
            const inputSnum = document.getElementById("secondNum").value;

            const result = document.getElementById("resultt").textContent = `${inputNum - inputSnum}`
        })
    }
}

MiniCalculator.add()
MiniCalculator.mins()