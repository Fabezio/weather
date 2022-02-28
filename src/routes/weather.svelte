<script>
  import {onMount} from "svelte"
  import Head from "$lib/components/Head.svelte"
  import Grid from "$lib/components/Grid.svelte"
  import Card from "$lib/components/Card.svelte"
  import axios from "axios"
  
  const apiKey = "f6f03d4b430d972622542e12b63f852d"
  const city = "nantes"
  onMount(()=> fetchData())
  let weather =  []
  const cities = "nantes paris marseille lille blois tours".split(" ")
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
<Grid>
<!-- <div class="meteo"> -->
{#each weather as {main, icon, temp, felt, minTemp, maxTemp, city}}

<!-- <div class="grid-info"> -->

<Card width="17" title="Localité: {city}">
   <!-- content here -->
   <div slot="content">
   <!-- <h3>Localité: {city}</h3> -->
   <div class="frame">
     <img src={icon} alt="logo">

   </div>
   <div>Temps: {main}</div>
   <div>Températures (en °C)</div>
   <section>
     <div><span class="list-start">globale:</span> <span class="list-end">{temp}</span></div>
     <div><span class="list-start">ressentie:</span> <span class="list-end">{felt}</span></div>
     <div><span class="list-start">Min:</span> <span class="list-end">{minTemp}</span></div>
     <div><span class="list-start">Max:</span> <span class="list-end">{maxTemp}</span></div>
   </section>
   </div>
  </Card>
{/each}
</Grid>

<!-- <div>température: {weather.main.temp}</div> -->

<style>

.frame {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
}


section {
  padding-left: 12px;
}
section div {
  display: grid;
  grid-template-columns: 1fr  1fr;
}
div {
text-align: justify;
display: grid;
/* grid-gap: 1em; */
grid-template-columns: 2fr, 1fr;
}

</style>