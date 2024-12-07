// 2) ჯავასკრიპტის პროგრამა (გასტილული) რომელსაც აქვს ორი შესაყვანი ველი- ( გადასახადი, "tip" ) და გამოითლის შესაბამის რიცხვს,

const firstInput = document.getElementById("firstinput").value;
const secondInput = document.getElementById("secondinput").value;
const p = document.getElementById("result");


function check(){
    if(!isNaN(firstInput) && !isNaN(secondInput)) {
        const sum = firstInput + secondInput;
        p.textContent = sum
    }
}

