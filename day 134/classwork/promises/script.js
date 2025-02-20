// 1. Create a simple Promise that resolves after 2 seconds with the message "Task 1 complete".

function twosecpas(time){
    return new Promise(resolve => setTimeout(resolve, ms))
}

twosecpas(2000).then(() => console.log("2 seccond pas"))

// 2. Create a Promise that rejects immediately with an error message "Task 2 failed". Handle the rejection using .catch.

// new Promise((resolve, reject) =>{
//     const t = true
//     if(!t) {
//         console.log("Task 2 failed")
//     } else if(t) {
//         console.log("task 2 complited")
//     }
// })

// 3. Create a Promise that resolves with a number (e.g., 5). Chain a .then handler to double the number and return it, then chain another .then handler to log the doubled number.

// const promise = new Promise((resolve, reject) => {
//     resolve(5)
// })

// promise(num)
//     const n = num * 2
//     return n

// 4. Create a function that returns a Promise which resolves after 2 seconds with a message "First". Chain another then that waits 1 second before logging "Second".

// function first(t){
//     return new Promise(resolve => setTimeout(resolve, t))
// }

// function second(r){
//     return new Promise(resolve => setTimeout(resolve, ms))
// }

// first(2000).then(() => console.log("2 seccond after"))
// second(1000).then(() => console.log("1 seccond after"))


// // 5. Create a function that returns a Promise which rejects after 2 seconds with an error message "Task 3 failed". Handle the rejection with a .catch to log the error message.

function third(e){
    return new Promise(resolve => setTimeout(resolve, e))
}
third(2000).then(() => console.error())


