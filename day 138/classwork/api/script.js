const displayDiv = document.getElementById("displayDiv") 
fetch("https://fakestoreapi.com/1 ")
    .then(res =>{
        if(res.ok) {
            displayDiv.innerHTML = res
        } else if(!res.ok) {
            displayDiv.innerHTML = "404 Error"
            throw new Error("Erorr 404")
        }
        res.json()
    }).catch(err => console.error(err))

