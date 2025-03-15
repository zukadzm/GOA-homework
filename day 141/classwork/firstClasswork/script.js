async function randomGenerator(e){
    e.preventDefault()
    try{
        let resp = await fetch("https://dog.ceo/api/breeds/image/random")
        let data = await resp.json()
        document.getElementById("myIMG").src = data.message
    }catch(err){
        console.error("ERROR", err)
    }
}

randomGenerator()