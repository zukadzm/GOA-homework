//  შექმენი ვებსაიტი რომელიც გამოიყენებს Async და Awai-ს, ასევე გამოიყენეთ  try/catch. ყველა User-ის Card უნდა გასტილოთ ლამაზად და ცალ-ცალკე. ბარათზე უდნა იყოს მათი მონაცემები, მაგალითად name, surname, email, address(მხოლოდ ქალაქი გამოიტანეთ) და company. API: 'https://jsonplaceholder.typicode.com/users'


const box1 = document.getElementById("child1");
const box2 = document.getElementById("child2");
const box3 = document.getElementById("child3");

async function func() {
    try{
        let data = await fetch("https://jsonplaceholder.typicode.com/users")
        let jsondata = await data.json()

        const box1p1 = document.createElement("p")
        const box1p2 = document.createElement("p")
        const box1p3 = document.createElement("p")

        box1p1.innerHTML = `${jsondata[0].name}`
        box1.append(box1p1)

        box1p2.innerHTML = `${jsondata[0].address.city}`
        box1.append(box1p2)

        box1p3.innerHTML = `${jsondata[0].email}`
        box1.append(box1p3)

        const box2p1 = document.createElement("p")
        const box2p2 = document.createElement("p")
        const box2p3 = document.createElement("p")

        
        box2p1.innerHTML = `${jsondata[1].name}`
        box2.append(box2p1)

        box2p2.innerHTML = `${jsondata[1].address.city}`
        box2.append(box2p2)

        box2p3.innerHTML = `${jsondata[1].email}`
        box2.append(box2p3)

        const box3p1 = document.createElement("p")
        const box4p2 = document.createElement("p")
        const box5p3 = document.createElement("p")


        box3p1.innerHTML = `${jsondata[2].name}`
        box3.append(box3p1)

        box4p2.innerHTML = `${jsondata[2].address.city}`
        box3.append(box4p2)

        box5p3.innerHTML = `${jsondata[2].email}`
        box3.append(box5p3)        


    }catch(er){
        console.error("ERROR")
    }
}

func()