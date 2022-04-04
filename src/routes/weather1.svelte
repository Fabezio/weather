<script>
  import {onMount} from "svelte"
  import Head from "$lib/components/Head.svelte"
  import Grid from "$lib/components/Grid.svelte"
  import Forecast from "$lib/components/Forecast.svelte"
  import CurrentForecast from "$lib/components/CurrentForecast.svelte"
  import axios from "axios"

  
  const apiKey = "f6f03d4b430d972622542e12b63f852d"
  const city = "nantes"
  onMount(()=> fetchData())
  let weather =  []
  const cities = "nantes paris lille".split(" ")
  let gatheredData= []
  async function fetchData () {
    for(let city of cities) {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`
      const {data} = await axios.get(url)
      const newData = {
        lat: data.coord.lat,
        lon: data.coord.lon,
        main: data.weather[0].description,
        temp: data.main.temp,
        felt: data.main.feels_like,
        icon: `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${data.weather[0].icon}.png`,
        minTemp: data.main.temp_min,
        maxTemp: data.main.temp_max,
        city: data.name
        
      }
      const gatherData = {
        icon: `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${data.weather[0].icon}.png`,
        coord: data.coord,
        weather: data.weather[0],
        base: data.base,
        main: data.main,
        visibility: data.visibility,
        wind: data.wind,
        clouds: data.clouds,
        date: data.dt,
        sys: data.sys,
        timezone: data.timezone,
        id: data.id,
        name: data.name,
        cod: data.cod
      }
      gatheredData = [...gatheredData, gatherData]

      weather = [...weather, newData]
      console.log(url)
      console.log(gatheredData)
    }

    return weather
  }
  function convertCoord (val) {
    const deg = Math.floor(val)
    const mn = Math.floor(60*(val - deg))
    const newCoord = `${deg}° ${mn}'`
        return(newCoord)
  }

  $: console.log(weather)

</script>
<Head title="Quel temps fait-il?" />

{#each weather as {main, lon, lat, icon, temp, felt, minTemp, maxTemp, city}}

<Forecast width="50%"  title="Localité: {city} ({convertCoord( lon)}/{convertCoord(lat)})">
  <div slot="content">
  <section>
    <CurrentForecast {main} {temp} {icon} />

  </section>
</div> 
  </Forecast>
{/each}

<style lang="scss" >
  



section {
  padding-left: 12px;
  //  div {
  //   display: grid;
  //   grid-template-columns: 1fr  1fr;
  // }
  
}
div {
text-align: justify;
display: grid;

grid-template-columns: 2fr 1fr;
}

</style>