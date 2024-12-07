# 8 Kyu

# 1)
# https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript
# function booleanToString(b){
#   return b.toString();
# }
# 2)
# https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
# function digitize(n) {
#   const toArr = Array.from(String(n), Number).reverse();
#   return toArr;
# }
# 3)
# https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

# function getGrade (s1, s2, s3) {
#   avg = (s1 + s2 + s3) / 3;
#   if(avg <60) return 'F';
#   if(avg <70) return 'D';
#   if(avg < 80) return 'C';
#   if(avg <90) return 'B';
#   return 'A';
# }

# 4)
# https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
# # const areaOrPerimeter = function(l , w) {
#   if (w == l) {
#     return w * l;
#   }
#     else {
#       return 2*l+2*w;
#     }
# };
# 7 Kyu

# 1)
# https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
# function DNAStrand(dna){
#   let newDNA = "";
#   let dnaKeys = {
#     "A": "T",
#     "T": "A",
#     "C": "G",
#     "G": "C"
#   };
  
#   for (let i = 0; i < dna.length; i++) {
#     let char = dna[i];
    
#     newDNA += dnaKeys[char];
#   }
  
#   return newDNA;
# }
# 2)
# https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
# function reverseWords(str) {
# let result = [];
  
#   // Go for it
#   str.split(" ").forEach((e) => {
#     result.push(e.split("").reverse().join(""));
#   })
  
#   return result.join(" ");
# }
# 3)
# https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
# function squareDigits(num) {
# let a = (num + '').split('');
#   let res1 = [];
#   for(let i = 0; i < a.length; i++){    
#     res1.push(a[i] ** 2);   
#   }
#   return +res1.join('');
# }

# 4)
# https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
# String.prototype.toJadenCase = function () {

#   function capitalizeFirstLetter(string) {
#       return string.charAt(0).toUpperCase() + string.slice(1);
#   }
  
#   return this.split(' ').map(capitalizeFirstLetter).join(' ');
# };