localStorage.setItem("firstName", "zuka")
localStorage.setItem("lastName", "qoridze")
localStorage.setItem("age", 15)
localStorage.setItem("country", "georgia")
localStorage.setItem("addres", "SHVCH17")

for(let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i))
}