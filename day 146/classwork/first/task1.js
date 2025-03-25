// შეადარეთ .set .push რომელია უფრო სწრაფი

console.time("Arr push")
let arr = []
for(let i = 0; i < 1000000; i++) {
    arr.push(i)
}
console.timeEnd("Arr push")

console.time("Setadd")
let set = new Set();
for(let ii = 0; ii < 1000000; ii++){
    set.add(ii);
}
console.timeEnd("SetAdd");