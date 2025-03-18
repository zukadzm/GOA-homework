const key = "7be7917c196616f5bfe22705857638f5"
const city = "Tbilisi"


fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city}&lon={lon}&appid=${key}`).then(res => res.json()).then(data => {
    console.log(`temperature in ${city}: ${data.main.temp}`)
})
