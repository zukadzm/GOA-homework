// 2) მანუალური object.assign(): შექმენით ფუნქცია რომელიც იღებს მინიმუმ 2-ს მაქსიმუმ უთვალავ არგუმენტს (ობიექტებს) და აბრუნებს ამ ობიექტების გაერთიანებას

function obAssign(target, ...val){
    sour.forEach(val => {
        for(let i in val) {
            target[i] = val[i]
        }
    });
    return target
}
const objct1 = {a: 1}
const objct2 = {b: 2}
const objct3 = {c: 3}
const result = obAssign({}, objct1, objct2, objct3)
console.log(result)