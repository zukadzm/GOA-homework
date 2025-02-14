// 3) შექმენი ფუნქცია, რომელიც იპოვის ორ ნაკრებებს შორის სიმეტრიულ სხვაობას (ელემენტები, რომლებიც ერთ-ერთშია, მაგრამ არა ორივეში).
// მაგალითი:
// სიმეტრიულისხვაობა(new Set([1, 2, 3]), new Set([3, 4, 5]));
// // შედეგი: Set {1, 2, 4, 5}

function simChange(set1, set2){
    const al = new Set()

    for(let i of set1) {
        if(!set2.has(value)) { // ვამოწმებთ თუ აქვს value
            al.add(value) // თუ არ აქვს al ში დაემატოს value
        }
    }

    for(let b of set2) {
        if(!set1.has(value)){ // ვამოწმებთ თუ აქვს value
            al.add(value)
        }
    }
    return al
}
const f = simChange(new Set([1,2,3], new Set([3,4,5])))
console.log(f)