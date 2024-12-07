// To-Do List Project Tasks
// HTML Structure: Create a basic HTML layout with an input field, an "Add" button, and an empty list container.

// const form = document.querySelector("form");
// const button = document.getElementById("btn");

// const items = [];

// button.addEventListener("submit",function(){
//     const item = form.item.value;

//     items.appendChild(item);
// })

// JavaScript Setup: Link your JavaScript file to your HTML.


// Add Task Functionality:
// When the "Add" button is clicked, create a new list item (li) element with the task's text.
// const form = document.querySelector("form");
// const ol = document.querySelector("ol");

// form.addEventListener("submit",function(e){ // აქ ფუნქციას გადავეცი 1 პარამტეტრი იმისთვის რომ გამოვიყენო preventDefault
//     e.preventDefault(); // აქ უკვე გამოვრთე საიტზე რეფრეში

//     const valueItem = form.item.value; // აქ წამოვიღე item ის მნიშვნელობა

//     const li = document.createElement("li"); // აქ შევქმენი li თეგი სადაც ჩაიწერება მომხმარებლის შემოტანილი მნიშნელობვაა

//     li.textContent = valueItem; // აქ ანუ li თეგში გამოვიტანოთ მომხმარებლის შემოტანილი მნიშვნელობები

//     
// 
 //     ol.appendChild(li); // აქ დალაგებულ სიაში ვამატებ li თეგს მომხმარებლის შემოტანილს
// })

// Append this new list item to the task list (ul element).
// Clear the input field after adding the task.

// Delete Task Functionality:
// Add a "Delete" button to each task item when it’s created.

// let count;

// function deleteItem(id) {
//     const item = document.getElementById(id); // აქ  id წამოვიღე getElementById - ის დახმარებით
//     ol.removeChild(item); // აქ უკვე მე შევქმენი ის რომ წაიშალოს მაგრამ ჯერ არ დამიმატებია მოსმენა ანუ როცა დააჭერს მაშინ რომ მოხდეს წაშლა
// }

// form.addEventListener("submit",function(e){ // აქ ფუნქციას გადავეცი 1 პარამტეტრი იმისთვის რომ გამოვიყენო preventDefault
//     e.preventDefault(); // აქ უკვე გამოვრთე საიტზე რეფრეში

//     const valueItem = form.item.value; // აქ წამოვიღე item ის მნიშვნელობა

//     const li = document.createElement("li"); // აქ შევქმენი li თეგი სადაც ჩაიწერება მომხმარებლის შემოტანილი მნიშნელობვაა

//     li.textContent = valueItem; // აქ ანუ li თეგში გამოვიტანოთ მომხმარებლის შემოტანილი მნიშვნელობები

//     li.id = `item-${count}` // აქ დაითვლის

//     li.onclick = function(){
//         deleteItem(li.id) // როდესაც მომხმარებელი დააჭერს შემოტანილ სახელს ან რაიმეს item ს ის მაშინ წაიშალოს ანუ onclick თან გამოვიძახე ფუნქცია
//     }

//     count++; // აქ იმატებს 1 ერთით

//     ol.appendChild(li); // აქ დალაგებულ სიაში ვამატებ li თეგს მომხმარებლის შემოტანილს
// })
// Set up an event listener to remove the task item from the list when the "Delete" button is clicked.

// Edit Task Functionality:
// Add an "Edit" button next to each task item.
// let count;

// function deleteItem(id) {
//     const item = document.getElementById(id); // აქ  id წამოვიღე getElementById - ის დახმარებით
//     ol.removeChild(item); // აქ უკვე მე შევქმენი ის რომ წაიშალოს მაგრამ ჯერ არ დამიმატებია მოსმენა ანუ როცა დააჭერს მაშინ რომ მოხდეს წაშლა
// }

// function edit(){
//     deleteItem();
// }

// form.addEventListener("submit",function(e){ // აქ ფუნქციას გადავეცი 1 პარამტეტრი იმისთვის რომ გამოვიყენო preventDefault
//     e.preventDefault(); // აქ უკვე გამოვრთე საიტზე რეფრეში

//     const valueItem = form.item.value; // აქ წამოვიღე item ის მნიშვნელობა

//     const li = document.createElement("li"); // აქ შევქმენი li თეგი სადაც ჩაიწერება მომხმარებლის შემოტანილი მნიშნელობვაა

//     li.textContent = valueItem; // აქ ანუ li თეგში გამოვიტანოთ მომხმარებლის შემოტანილი მნიშვნელობები

//     li.id = `item-${count}` // აქ დაითვლის

//     li.onclick = function(){
//         deleteItem(li.id) // როდესაც მომხმარებელი დააჭერს შემოტანილ სახელს ან რაიმეს item ს ის მაშინ წაიშალოს ანუ onclick თან გამოვიძახე ფუნქცია
//     }

//     li.onclick = function(){
//         edit(li);
//     }

//     count++; // აქ იმატებს 1 ერთით

//     ol.appendChild(li); // აქ დალაგებულ სიაში ვამატებ li თეგს მომხმარებლის შემოტანილს
// })
// When the "Edit" button is clicked, replace the task text with an input field containing the current task text.
// Add a "Save" button to confirm the changes.
// When the "Save" button is clicked, update the task item with the edited text and remove the input field.

// Clear All Tasks (Optional):
// Add a button to clear all tasks from the list at once.

// let count;

// function deleteItem(id) {
//     const item = document.getElementById(id); // აქ  id წამოვიღე getElementById - ის დახმარებით
//     ol.removeChild(item); // აქ უკვე მე შევქმენი ის რომ წაიშალოს მაგრამ ჯერ არ დამიმატებია მოსმენა ანუ როცა დააჭერს მაშინ რომ მოხდეს წაშლა
// }

// function edit(){
//     deleteItem();
// }

// form.addEventListener("submit",function(e){ // აქ ფუნქციას გადავეცი 1 პარამტეტრი იმისთვის რომ გამოვიყენო preventDefault
//     e.preventDefault(); // აქ უკვე გამოვრთე საიტზე რეფრეში

//     const valueItem = form.item.value; // აქ წამოვიღე item ის მნიშვნელობა

//     const li = document.createElement("li"); // აქ შევქმენი li თეგი სადაც ჩაიწერება მომხმარებლის შემოტანილი მნიშნელობვაა

//     li.textContent = valueItem; // აქ ანუ li თეგში გამოვიტანოთ მომხმარებლის შემოტანილი მნიშვნელობები

//     li.id = `item-${count}` // აქ დაითვლის

//     li.onclick = function(){
//         deleteItem(li.id) // როდესაც მომხმარებელი დააჭერს შემოტანილ სახელს ან რაიმეს item ს ის მაშინ წაიშალოს ანუ onclick თან გამოვიძახე ფუნქცია
//     }

//     li.onclick = function(){
//         edit(li);
//     }

//     li.onclick = function(){
//         deleteItem(li)
//     }

//     count++; // აქ იმატებს 1 ერთით

//     ol.appendChild(li); // აქ დალაგებულ სიაში ვამატებ li თეგს მომხმარებლის შემოტანილს
// })

// Styling (Optional):
// Style your task list, buttons, and input field for a polished look.

// ---

// With these steps, you’ll get hands-on practice with createElement, appendChild, removeChild, and updating elements in the DOM.