// 5. Create a function that returns a Promise which rejects after 2 seconds with an error message "Task 3 failed". Handle the rejection with a .catch to log the error message.

const my_promise = new Promise((reject)=> {
    setTimeout(()=> {
        reject(console.log("Task 3 failed"))
    }, 2000)
})

my_promise
    .catch((error)=> {
        console.error(error)
    })


// 6. Create a function that returns a Promise which resolves after a random delay between 1 and 5 seconds with the message "Task 1 complete".

const my_promise2 = new Promise((resolve)=> {
    const diley = Math.floor(Math.random() * 5000)
    setTimeout(()=> {
        console.log("Task 1 complete")
    }, diley)
})

my_promise2.then((mes) => console.log(mes))

// 7. Create a function that returns a Promise which resolves after a random delay between 1 and 3 seconds with the message "First". Chain another .then that waits for another random delay between 1 and 3 seconds before logging "Second".

const my_promise3 = new Promise((resolve)=> {
    const diley = Math.floor(Math.random() * 5000)
    setTimeout(()=> {
        resolve(console.log("Task 1 complete"))
    }, diley)

    const diley2 = Math.floor(Math.random() * 3000)
    setTimeout(()=> {
        resolve(console.log("Task 2 complete"))
    }, diley2)
})

my_promise2.then((mes) => console.log(mes))


// 8. Create a function that returns a Promise which rejects after a random delay between 1 and 4 seconds with an error message "Task 3 failed". Handle the rejection with a .catch to log the error message.

const my_promise4 = new Promise((reject)=> {
    const diley = Math.floor(Math.random() * 4000)
    setTimeout(()=> {
        reject(console.log("Task 3 failed"))
    }, diley)
})

my_promise2.catch(() => console.error("error"))


// 9. Create a function that returns a Promise which resolves after a random delay between 1 and 5 seconds with the message "Task 1 complete" if the random number is greater than 0.5, otherwise, it should resolve with the message "Task 1 was quick".

const my_promise5 = new Promise((resolve)=> {
    const diley = Math.floor(Math.random() * 5000)
    setTimeout(()=> {
        console.log("Task 1 complete")
        if(diley == 0.5) {
            console.log("Task 1 so quick")
            return false
        }
    }, diley)
})

my_promise2.catch((mes) => console.log(mes))

// 10. Create a function that returns a Promise which resolves after a random delay between 1 and 4 seconds. If the random number is less than 0.3, reject with an error message "Task 3 failed". Otherwise, resolve with the message "Task 3 complete". Handle the rejection with a .catch to log the error message.


const my_promise6 = new Promise((resolve)=> {
    const diley = Math.floor(Math.random() * 5000)
    setTimeout(()=> {
        console.log("Task 1 complete")
        if(diley == 0.3) {
            console.log("Task 1 so quick")
            return false
        }
    }, diley)
})

my_promise2.then((mes) => console.log(mes))