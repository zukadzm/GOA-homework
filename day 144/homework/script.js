// 2) შექმენით 5-5 მაგალითი forEach, map და reduce მეთოდებზე. კომენტარებით ახსენით რა განსხვავებაა სამივე მეთოდში. optional ეს მეთოდები გამოიყენეთ API-ზე (https://randomuser.me/api/) 

// forEach უბრალოდ გადაუვლის მასივს, არ შეგვიძლია მისი return, გადაეცემა ორი არგუმენტი პირველი ელემენტი, მეორე ინდექსი
myListn = [1,2,3,4,5]

async function ar(){
    try{
        let res = await fetch("https://randomuser.me/api")
        if(!res.ok){
            throw new Error("ERROR")
        } 
        let data = await res.json()

        data.forEach(data => {
            console.log(data.name)
        })
    }catch(er){
        console.error("ERROR",er)
    }
}

async function ar2(){
    try{
        let res = await fetch("https://randomuser.me/api")
        if(!res.ok){
            throw new Error("ERROR")
        } 
        let data = await res.json()

        data.forEach(data => {
            console.log(`Hello ${data.name}`)
        })
    }catch(er){
        console.error("ERROR",er)
    }
}

async function ar3(){
    try{
        let res = await fetch("https://randomuser.me/api")
        if(!res.ok){
            throw new Error("ERROR")
        } 
        let data = await res.json()

        data.forEach(data => {
            console.log(`Hello: ${data.name}, ${data.surname}`)
        })
    }catch(er){
        console.error("ERROR",er)
    }
}

async function ar4(){
    try{
        let res = await fetch("https://randomuser.me/api")
        if(!res.ok){
            throw new Error("ERROR")
        } 
        let data = await res.json()

        data.forEach(data => {
            console.log(`bye: ${data.name}`)
        })
    }catch(er){
        console.error("ERROR",er)
    }
}

async function ar5(){
    try{
        let res = await fetch("https://randomuser.me/api")
        if(!res.ok){
            throw new Error("ERROR")
        } 
        let data = await res.json()

        data.forEach(data => {
            console.log(`bye: ${data.name}`)
        })
    }catch(er){
        console.error("ERROR",er)
    }
}

// map გადაუყვება ყველა ელემენტს, map ზე ვარეთურნებთ ნებისმიერ value-ს რაც გვინდა იმას ვა-return ებთ რასაც დავარეთურნებთ ის ჩაიწერება ახალ მასივში


async function ar5(){
    try{
        let res = await fetch("https://randomuser.me/api")
        if(!res.ok){
            throw new Error("ERROR")
        } 
        let data = await res.json()

        const helos = data.map(user => `${user.name.first} ${user.name.last}`);
        console.log(`Hello ${helos}`)
    }catch(er){
        console.error("ERROR",er)
    }
}

async function ar5(){
    try{
        let res = await fetch("https://randomuser.me/api")
        if(!res.ok){
            throw new Error("ERROR")
        } 
        let data = await res.json()

        const helos = data.map(user => `${user.name.first} ${user.name.last}`);
        console.log(`Bye ${helos}`)
    }catch(er){
        console.error("ERROR",er)
    }
}

async function ar5(){
    try{
        let res = await fetch("https://randomuser.me/api")
        if(!res.ok){
            throw new Error("ERROR")
        } 
        let data = await res.json()

        const helos = data.map(user => `${user.name}`);
        console.log(`Hello ${helos}`)
    }catch(er){
        console.error("ERROR",er)
    }
}

async function ar5(){
    try{
        let res = await fetch("https://randomuser.me/api")
        if(!res.ok){
            throw new Error("ERROR")
        } 
        let data = await res.json()

        const helos = data.map(user => ` ${user.name.last} ${user.gender} ${user.age}`);
        console.log(`Hello ${helos}`)
    }catch(er){
        console.error("ERROR",er)
    }
}

async function ar5(){
    try{
        let res = await fetch("https://randomuser.me/api")
        if(!res.ok){
            throw new Error("ERROR")
        } 
        let data = await res.json()

        const helos = data.map(user => `${user.name.first}`);
        console.log(`Hello ${helos}`)
    }catch(er){
        console.error("ERROR",er)
    }
}

// reduce პირველ ინდექს დაუმატებს მეორე ინდექს და ასშ

async function reduce(){
    try{
        let res = await fetch("https://randomuser.me/api")
        if(!res.ok){
            throw new Error("ERROR")
        } 
        let data = await res.json()

        const names = users.reduce((el, user) => {
            el.push(`${user.name.first} ${user.name.last}`);
            return el;
        }, []);

        console.log(`Hello ${names}`)
    }catch(er){

        console.error("ERROR",er)
    }
}

async function reduce(){
    try{
        let res = await fetch("https://randomuser.me/api")
        if(!res.ok){
            throw new Error("ERROR")
        } 
        let data = await res.json()

        const names = users.reduce((el, user) => {
            el.push(` ${user.name.last}`);
            return el;
        }, []);

        console.log(`Hello ${names}`)
    }catch(er){

        console.error("ERROR",er)
    }
}

async function reduce(){
    try{
        let res = await fetch("https://randomuser.me/api")
        if(!res.ok){
            throw new Error("ERROR")
        } 
        let data = await res.json()

        const names = users.reduce((el, user) => {
            el.push(` ${user.city}`);
            return el;
        }, []);

        console.log(`Hello ${names}`)
    }catch(er){

        console.error("ERROR",er)
    }
}

async function reduce(){
    try{
        let res = await fetch("https://randomuser.me/api")
        if(!res.ok){
            throw new Error("ERROR")
        } 
        let data = await res.json()

        const names = users.reduce((el, user) => {
            el.push(`${user.gender}`);
            return el;
        }, []);

        console.log(`Hello ${names}`)
    }catch(er){

        console.error("ERROR",er)
    }
}

async function reduce(){
    try{
        let res = await fetch("https://randomuser.me/api")
        if(!res.ok){
            throw new Error("ERROR")
        } 
        let data = await res.json()

        const names = users.reduce((el, user) => {
            el.push(`${user.age} ${user.last}`);
            return el;
        }, []);

        console.log(`Hello ${names}`)
    }catch(er){

        console.error("ERROR",er)
    }
}
