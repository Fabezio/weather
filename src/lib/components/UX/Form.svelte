<script>
  import {Button }from "sveltestrap" 
  import {weather} from "$lib/store/forecast"
  import axios from "axios"
  const apiKey = "f6f03d4b430d972622542e12b63f852d";

  let entry = "";
  let cities = []
  function validateCities() {
  if (entry.length ) cities = entry.split(", ")
}
  function handleKey(e) {
    if (e.Key == "Enter") validateCities()
  }
  
  const exclude = "hourly,minutely,alerts";
  
  
  async function fetchData() {
     $weather = [];
    console.log(cities)
    cities.map(async city => {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${apiKey}&units=metric&lang=fr`;
      const { data } = await axios.get(url);
      console.log(url)
  
      const coords = {
        lat: data.coord.lat,
        lon: data.coord.lon,
      }
  
      const gatherData = {
        icon: `https://openweathermap.org/themes/open$weathermap/assets/vendor/owm/img/widgets/${data.weather[0].icon}.png`,
        coord: data.coord,
        weather: data.weather[0],
        // base: data.base,
        main: data.main,
        visibility: data.visibility,
        wind: data.wind,
        clouds: data.clouds,
        dt: data.dt,
        sys: data.sys,
        timezone: data.timezone,
        id: data.id,
        name: data.name,
        cod: data.cod,
      };
      
      const { lon, lat } = coords;
      const oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=fr&exclude=${exclude}&appid=${apiKey}`;
  
      console.log(oneCallUrl)
      let forecast = [];
      const { daily, current } = (await axios.get(oneCallUrl)).data;
      const currentData = {
          weather: {...current.weather[0]},
          dt: current.dt,
          sunrise: current.sunrise,
          sunset: current.sunset,
          temp: current.temp,
          feels_like: current.feels_like,
          pressure: current.pressure,
          humidity: current.humidity,
          dew_point: current.dew_point,
          wind_speed: current.wind_speed,
          wind_deg: current.wind_deg,
          uvi: current.uvi,
          clouds: current.clouds,
      }
  
      let days= []
      daily.map((day, i) => {
        const dayData = {
            weather: {...day.weather[0]},
            dt: day.dt,
            sunrise: day.sunrise,
            sunset: day.sunset,
            temp: day.temp.day,
            feels_like: day.feels_like.day,
            pressure: day.pressure,
            humidity: day.humidity,
            dew_point: day.dew_point,
            wind_speed: day.wind_speed,
            wind_deg: day.wind_deg,
            uvi: day.uvi,
            clouds: day.clouds,
          }
          
        days = [...days, dayData]
      } )
  
  
      for (let [key, value] of Object.entries(current)) {
  
      }
      daily.map((day, i) => {
  
        for (let [key, value] of Object.entries(day)) {
          
  
        }
        
      })
      // cityForecast = [...cityForecast, { name: city, coords, now: currentData, days: days }];
      $weather = [...$weather, {city: city.trim(), coords, now: currentData, days: days } ]
    })
    
    return $weather;
  }
  $: if(cities.length) fetchData()

</script>

<svelte:window on:keydown={handleKey} ></svelte:window>
  
<form action="" on:submit|preventDefault={validateCities} >

<div >
  <label for="cities">Entrer un nom de ville (plusieurs séparées par des espaces)</label>
  <input class="form-control"  id="cities" on:change={()=> entry} name="cities" bind:value={entry} rows=50/>

</div>
<Button type="submit" color="warning" >valider</Button>
</form>