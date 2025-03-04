function jokeCw(){
    fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
        .then(response => response.json())
        .then(res => {
            const displayDiv = document.getElementById("display");
            if(res.type === 'twopart'){ // თუ არის 2 ნაწილიანი twopart: setup\delivery
                displayDiv.innerHTML = res.setup;
                setTimeout(()=> {
                    displayDiv.innerHTML = `ID: ${res.id} - ${res.delivery}` // თვით ობიექტში არის ეს მოცემული
                }, 1000)
            } else {
                displayDiv.innerHTML = `ID: ${res.id} - ${res.joke}`
            }
        })
}
