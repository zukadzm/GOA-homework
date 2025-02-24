// 5) Create three Promises that resolve based on random conditions (e.g., if a random number is greater than 0.5, resolve with a message; otherwise, resolve after 2 seconds with a different message)


const promises = new Promise((resolve, reject) => {
    const random = Math.random();
    if(random > 0.5) {
        resolve("Promise 1 quick ${random}")
    } else {
        setTimeout(() => {
            resolve("Promise 1 resolve 2 second")
        })
    }
})


// 6) Create a promise that rejects after 1 second with a specific error message.

const promise2 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve("This promise resolve in 1 sec")
    }, 1000)
})