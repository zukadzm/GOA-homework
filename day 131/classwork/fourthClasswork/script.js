// 4) სიმბოლოების სიხშირე
// დაწერე ფუნქცია, რომელიც მიიღებს სტრინგს და დააბრუნებს რუკას, სადაც გასაღებები სიმბოლოებია, ხოლო მნიშვნელობები – მათი სიხშირეები.
// მაგალითი:
// სიმბოლოსიხშირე("hello"); 
// // შედეგი: Map {'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1}


function sixshire(val){
    const result = {};
    for(let i of val) {
        result[i] = (result[val])
    }
    return result
}
console.log(sixshire("hello"))