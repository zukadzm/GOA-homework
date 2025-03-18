// შექმენით ამინდის აპლიკაცია, სადაც იქნება ერთი მთავარი დაფა, რომელიც აჩვენებს 7-დღიან ამინდის პროგნოზს. ასევე, აუცილებლად უნდა გამოჩნდეს ტემპერატურა (გრადუსებში) და ტენიანობა.

// https://openweathermap.org/


let apiKey = `cbf6b564c861d6372c2b1b9671e2922e`
let city = `Tbilisi`

async function weather() {
    try{
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        let data = await res.json()
        const displayDiv = document.getElementById("dis")
        displayDiv.innerHTML = ``

        for(let i = 0; i < data.length; i+=8) {
            let day = data[i]
            let tempp = day.main.temp;
            let humidity = day.main.humidity;

            displayDiv.innerHTML = `<p>Day: ${i/8 + 1}: Temperature: ${tempp}: Humidity: ${humidity}</p>`
        }

    }catch(err){
        console.error("ERROR", err)
    }
}
