// const buttn = document.getElementById("button");

// buttn.addEventListener("click", function(){
//     let cnfr = confirm("Are you 18 year old?");
//     if(cnfr === True) {
//         alert("You are adult");
//     } else {
//         alert("You are kid");
//     }
// })


// 1) შექმენით საიტი სადაც გექნებათ ერთი ღილაკი. ამ ღილაკზე დაკლიკებისას მომხარებელს უნდა გამოიუტანოთ confirm box-ი. სადაც შეეკითხებით არის თუ არა ის ზრდასრული(18 წელს ზემოთ). თუ მომხარებელი დააჭერს OK-ს გამოუტანეთ ალერტ მესიჯი You are adult, სხვა შემთხვევაში გომუტანეთ, You are kid



const form = document.getElementById("myForm");

function checkValid() {
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const pass = form.elements.password.value;
    const ml = form.elements.Male;
    const fl = form.elements.Female;

    if(name === '' || email === '' || pass === '') {
        alert("please fill");
        return
    }

    if(!ml.checked || !fl.checked) {
        alert("Please select gender");
        return
    }

}