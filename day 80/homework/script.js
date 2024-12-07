// // Exercise Set 1: Basics (Array Length, toString, at, join, pop, push)

// // Get Length: Create an array with 5 items. Log the length of the array.

// let numbers = [234,2234,123,235,678];
// console.log(numbers.length);

// // Convert to String: Convert the same array to a string using toString() and log the result.
// let numbers2 = '5,6,1,67,7];
// let str = numbers2.toString();
// console.log(str);


// // Access Element: Use the at() method to access the second element and log it.
// let fruits1 = ["Apple","Orange","Watermelon","Strawwbery"];
// let index = fruits1.at([3]);
// console.log(index)

// // Join Elements: Use join() to combine the array elements with - between them.
// let numbers3 = [1,2,3,4,5];
// console.log(numbers3.join("-"))

// Push & Pop: Add two new elements to the array using push(), then remove the last element using pop().

// let fruits3 = ["Apple","Orange","Watermelon"];
// let addElementToMassive = fruits3.push("Strawwbery");
// let removeElementToMassive = fruits3.pop();

// console.log(addElementToMassive);
// console.log(removeElementToMassive);


// Exercise Set 2: Modify Array (shift, unshift, delete, concat)
// Shift Element: Create an array and remove the first element using shift().
// let fruits = ["Apple","Orange","Watermelon"];
// console.log(fruits.shift());

// Unshift Element: Add a new element at the beginning using unshift().
// let fruits = ["Apple","Orange","Watermelon"];
// console.log(fruits.unshift());


// Delete Element: Use the delete operator to remove the second element. Log the array and observe the result.
// let fruits = ["Apple","Orange","Watermelon"];
// delete fruits[1];
// console.log(fruits);


// Concatenate Arrays: Create two arrays and use concat() to merge them.

// let fruits = ["Apple","Orange","Watermelon"];
// let fruits2 = ["Apple2","Orange2","Watermelon2"];
// let Concatenate = fruits.concat(fruits2);
// console.log(Concatenate)

// Explore Unshift & Length: After using unshift(), log the new length of the array.

// let fruits = ["Apple","Orange","Watermelon"];
// let unfshift = fruits.unshift();
// let lenghtt = fruits.length;
// console.log(unfshift,lenghtt);

// Exercise Set 3: Searching (indexOf, lastIndexOf, includes)
// Find Index: Create an array with repeated values. Use indexOf() to find the first occurrence of an element.


// Find Last Index: Use lastIndexOf() to find the last occurrence of the same element.
// let fruits = ["Apple","Orange","Watermelon"];
// console.log(fruits.indexOf(["Orange"]));

// Check Inclusion: Use includes() to check if a specific element exists in the array.
// let fruits = ["Apple","Orange","Watermelon"];
// console.log(fruits.includes("apple"));


// Invalid Index Search: Use indexOf() to search for a non-existing element. Log the result.
// let fruits = ["Apple","Orange","Watermelon"];
// console.log(fruits.lastIndexOf(["alucha"])) 


// Case Sensitivity: Check if includes() is case-sensitive by searching for different cases of the same string.
// let fruits = ["Apple","Orange","Watermelon"];
// console.log(fruits.includes("SAZAMTRO"));


// Exercise Set 4: Sorting and Reversing (sort, reverse)
// Sort Strings: Create an array of strings and sort them using sort().
// let fruits = ["Apple","Orange","Watermelon"];
// console.log(fruits.sort());

// Sort Numbers: Create an array of numbers and sort them in ascending order.
// let numbers = [1,4,2,5,124,5,1,54,];
// console.log(numbers.sort());

// Custom Sort: Use a custom comparison function to sort numbers in descending order.
// let numbers2 = [1,4,2,5,2,5,1,4];
// console.log(numbers2.sort());

// Reverse Array: Use reverse() on a sorted array and log the result.
// let numbers2 = [1,4,2,5,2,5,1,4];
// let sortMassive = numbers2.sort();
// let reverseMassive = numbers2.reverse();
// console.log(sortMassive);
// console.log(reverseMassive)


// Mix Sort and Reverse: Sort an array, then reverse it.
// let numbers2 = [1,4,2,5,2,5,1,4];
// let sortMassive = numbers2.sort();
// let reverseMassive = numbers2.reverse();
// console.log(sortMassive);
// console.log(reverseMassive);
// console.log(numbers2.reverse);


// Exercise Set 5: Combined Operations
// Sort and Push: Create an array of numbers, sort it, and add a new number using push(). Log the updated array.
// let numbers = [1,4,2,5,2,5,1,4];
// let sortMassive = numbers.sort();
// let pushMassiveNewElement = numbers.push(123);
// console.log(sortMassive);
// console.log(pushMassiveNewElement);


// Concatenate and Sort: Create two arrays, merge them with concat(), and sort the result.
// let numbers = [1,4,2,5,2,5,1,4];
// let numbers2 = [5,5,6,7,2,9,9949];
// let Concatenate = numbers.concat(numbers2);
// console.log(Concatenate.sort());

// Push and Reverse: Add three new elements to an array, then reverse the entire array.
// let numbers = [1,4,2,5,2,5,1,4];
// let pushMassiveNewElement = numbers.push(1,2,3);
// let reverseMassive = numbers.reverse();
// console.log(pushMassiveNewElement);;
// console.log(reverseMassive);

// Find and Remove Element: Use indexOf() to locate an element, then use splice() to remove it.
// let numbers = [1,4,2,5,2,5,1,4];
// let find = numbers.indexOf();
// let remove = numbers.splice([0]);
// console.log(find,remove);


// Join and Include Check: Join the elements of an array into a string, split it back into an array, and check if a specific value is included using includes().

// let newArray = ["Hello",124,"hello2"];
// let join = newArray.join("-");
// let include = newArray.includes([124]);
// console.log(join)
// console.log(include)