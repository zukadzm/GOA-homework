// 1)  codewars
// function filter_list(l) {
  
//     // Return a new array with the strings filtered out
    
//     let numArray = [];
    
//     let listLength = l.length;
    
//     for (i=0; i < listLength; i++) {
      
//       if (Number.isInteger(l[i])) {
        
//         numArray.push(l[i]);
        
//       } 
      
//     }
    
//     return numArray;
    
//   }


// 1)Create a function greet that accepts a name as a parameter and greets the person. If no name is provided, the default name should be "Guest".

// function greet(name = "Guest") {
//     console.log(name);
// }
// greet()


// 2)Addition with Default Parameters
// Write a function add_numbers that takes two numbers and returns their sum. The second number should have a default value of 0.

// function add_numbers(num1, num2 = 0) {
//     return num1 + num2;
// }
// add_numbers()


// 3)Rectangle Area Calculator
// Create a function calculate_area to find the area of a rectangle. It should take two parameters: length and width. If the width is not provided, use a default value of 1.

// function calculate_area(length,width = 1){
//     return length * width;
// }
// calculate_area()


// 4)Temperature Conversion
// Write a function convert_temperature to convert temperatures between Celsius and Fahrenheit. It should have two parameters: temperature and scale (either "C" for Celsius or "F" for Fahrenheit), with "C" as the default scale.

// function convert_temperature{temperature,scale} {
//     if (scale === "C") {
//         return temperature * 9/5 + 32;
//     } else if (scale === "F") {
//         return (temperature - 32) * 5/9;
//     } else {
//         return "Invalid scale. Please use either 'C' for Celsius or 'F' for Fahrenheit.";
//     }
// }
// convert_temperature()


// 5)Shopping List
// Create a function add_to_shopping_list that accepts an item and a quantity. The quantity should default to 1 if not provided.

// function add_to_shopping_list(item,quantity) {
//     if (quantity === undefined) {
//         return quantity =1
//     }
// }
// add_to_shopping_list()


// 6)Power Function
// Write a function power that calculates the power of a number with a default exponent value of 2 (i.e., square).

// function power(number, exponent) {
//     return number + exponent;
// }
// power()

// 7)Personalized Message
// Create a function create_message that generates a personalized message given a name and an optional greeting ("Hello" as default).

// function create_message(name = "Hello") {
//     console.log(name);
// }
// create_message()

// 8)Calculate Discount
// Write a function apply_discount that calculates the final price of an item after applying a discount. The discount should be a default of 10%.

// function apply_discount(amount, discount){
//     return amount - (amount * discount / 100);
// }
// apply_discount()

// 9)Introduction Function
// Create a function introduce that takes a name, age, and country. If age and country are not provided, they should default to "unknown".

// function introduce(name, age, country) {
//     if(name === undefined) {
//         return "unknown";
//     } {
//         if(age === undefined) {
//             return "unknown"; 
//     } {
//         if(country === undefined) {
//             return "unknown";
//         }
//     }
// }
// introduce()

// 10)Calculate Final Price
// Write a function calculate_price that takes the price of an item and a sales tax. The sales tax should default to 5%.

// function calculate_price(tax,amount) {
//     return amount + tax * amount
// }
// calculate_price()


// 11)Find the Maximum
// Create a function find_max that accepts three numbers and returns the largest one using comparison operators and if-else statements.

// function find_max(number) {
//     return number.max();
// }
// print(find_max(number[1,2,3,4,5,6,7,8,9,10]));


// 12)Pass or Fail
// Write a function pass_or_fail that accepts a student's score and returns "Pass" if the score is 50 or above, and "Fail" otherwise.

// function pass_or_fail(score) {
//     if(score <50) {
//         return "Fail";
//     } else if(score >50) {
//         return "Pass";
//     }
// }
// print(pass_or_fail(score[10,20,30,40,50,60,70,80,90,100]))

// 13)Sum of Numbers
// Write a function sum_of_numbers that accepts a list of numbers and returns their sum using a for loop.

// function sum_of_numbers(numbers) {
//     for(let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
// }
// print(sum_of_numbers(1,2,3,4,5,7,8,9,10,11,12,13,14,15))

// 14)Count Even Numbers
// Create a function count_evens that accepts a list of integers and returns the count of even numbers using a for loop.

// function count_evens(numbers) {
//     let count = 0;
//     for(let i = 0; i < numbers.length; i++) {
//         if(numbers[i] % 2 === 0) {
//             count++;
//         }
//     }
//     return count;
// }
// count_evens()