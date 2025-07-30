const API_key = "a020c8b4fab16c5ecce5b73dbb4681e8"

document.getElementById('searchBtn').addEventListener('click', (e)=> {
  e.preventDefault()
  City = document.getElementById('cityInput')
  Chekwather(City.value)
})

async function Chekwather(City){
    try{
    let city_data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_key}&units=metric`)
    let cityJson = await city_data.json()
    if(cityJson.message){
          let ht = document.getElementById('Dispaly-wather')
    ht.innerHTML = `
    <h1 id="temperature">${City} ${cityJson.message}</h1>`
    }
    else{
    displayData(cityJson)
    }
}
    catch(err){

    }
}

function displayData({weather, main, wind, name}){
    let ht = document.getElementById('Dispaly-wather')
    ht.innerHTML = `
    <h1 id="temperature">${main.temp}</h1>
    <div class="weather-description" id="description">${weather[0].description}</div>
    <img id="weatherIcon" class="weather-icon" src="https://openweathermap.org/img/w/${weather[0].icon}.png" alt="Weather Icon" />
    <h1 id="temperature">${name}</h1>
    <div class="weather-info">
      <div class="info-box">
        <h3>🌬️ Wind</h3>
        <p id="wind">${wind.speed} m/s</p>
      </div>
      <div class="info-box">
        <h3>⏲️ Pressure</h3>
        <p id="pressure">${main.pressure} hPa</p>
      </div>
      <div class="info-box">
        <h3>💧 Humidity</h3>
        <p id="humidity">${main.humidity}%</p>
      </div>
    </div>
  </div>
    `
}

document.getElementById('locationBtn').addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((postion) => {
        let lati = postion.coords.latitude;
        let longi = postion.coords.longitude;
        fetchDataByCoordinates(lati, longi);
})

async function fetchDataByCoordinates(lt ,lg){
   let city_data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lt}&lon=${lg}&appid=${API_key}&units=metric`)
   let cityJson = await city_data.json()
    if(cityJson.message){
          let ht = document.getElementById('Dispaly-wather')
    ht.innerHTML = `
    <h1 id="temperature">${City} ${cityJson.mes}sage}</h1>`
    }
    else{
    displayData(cityJson)
    }
}})
