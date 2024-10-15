# https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
# function find_average(array) {
#   if (array.length === 0) {
#   return 0;
#   }
#   var result = 0;
#   for (i=0; i<array.length; i++) {
#     result +=array[i];
#   }
#   return result/array.length;
# }

# https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

# smash = function (words) {
#   return words.join(" ");
# };

# https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

# function abbrevName(name){

#   var nameArray = name.split(" ");
#   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
# }


# https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript
# function DNAtoRNA(dna){
#   return dna.replace(/T/g, 'U');
# }

# https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

# const getCount =(str)=> {
#   let vowelsCount = 0;
  
#   // enter your majic here
#   for(letter of str){
#   if(letter === 'a'){
#     vowelsCount +=1;
#   }else if(letter === 'e'){
#     vowelsCount +=1;
#   }else if(letter === 'i'){
#     vowelsCount +=1;
#   }else if(letter === 'o'){
#     vowelsCount +=1;
#   }else if(letter === 'u'){
#     vowelsCount +=1;
#   }
#   }
  
#   return vowelsCount;
# }