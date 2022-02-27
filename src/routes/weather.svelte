<script>
  import {onMount} from "svelte"
  import Head from "$lib/components/Head.svelte"
  import axios from "axios"
  
  const apiKey = "f6f03d4b430d972622542e12b63f852d"
  const city = "nantes"
  onMount(()=> fetchData())
  let weather =  []
  const cities = "nantes paris marseilles".split(" ")
  async function fetchData () {
    for(let city of cities) {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`
      const {data} = await axios.get(url)
      const newData = {
        main: data.weather[0].description,
        temp: data.main.temp,
        felt: data.main.feels_like,
        icon: `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${data.weather[0].icon}.png`,
        minTemp: data.main.temp_min,
        maxTemp: data.main.temp_max,
        city: data.name
  
      }
      // data.map(item => {weather = [...weather, item]})
      weather = [...weather, newData]
    }
    // console.log(JSON.stringify(data))
    return weather
  }
  // fetchData()
  $: console.log(weather)

</script>
<Head title="Quel temps fait-il?" />
<!-- <h2></h2> -->
<div class="meteo">
{#each weather as {main, icon, temp, felt, minTemp, maxTemp, city}}
<div class="grid-info">


   <!-- content here -->
   <h3>Localité: {city}</h3>
   <img src={icon} alt="logo">
   <div>Temps: {main}</div>
   <div>Températures (en °C)</div>
   <ul>
     <li><div class="list-start">globale:</div> <div class="list-end">{temp}</div></li>
     <li><div class="list-start">ressentie:</div> <div class="list-end">{felt}</div></li>
     <li><div class="list-start">Min:</div> <div class="list-end">{minTemp}</div></li>
     <li><div class="list-start">Max:</div> <div class="list-end">{maxTemp}</div></li>
   </ul>
  </div>
{/each}
</div>

<!-- <div>température: {weather.main.temp}</div> -->

<style>
  h3,
  div, ul, li {color: var(--light-txt);}
  li {
text-align: justify;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(3, 1fr);
  }
  /* li span {
    position: relative;
  } */
  .meteo {
    text-align: center;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(2, 1fr);
    /* justify-content: center; */
  }
  .grid-info {
    max-width: 15em;
  }
  .list-start {
    /* min-width: 5em; */
  }
</style>