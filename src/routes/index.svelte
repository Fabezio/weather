<script>
  // import Spinner from "$lib/components/UI/Spinner.svelte"
  import {Spinner, Progress} from 'sveltestrap';
  import Container from '$lib/components/UI/Container.svelte';
  import Head from "$lib/components/UI/Head.svelte";
  import Form from "$lib/components/UX/Form.svelte"
  import Forecast from "$lib/components/forecast/Forecast.svelte";
  import {weather, cities, detail, getCoords} from "$lib/store/forecast"
  import GetPosition from '$lib/components/UX/GetPosition.svelte';
    import axios from "axios"
    const exclude = "hourly,minutely,alerts";
  const apiKey = "f6f03d4b430d972622542e12b63f852d";
  let lat
  let lon
  const validCoords = $getCoords.lat != undefined && $getCoords.lon != undefined
  $: if (validCoords) {
    lat = $getCoords.lat
    lon = $getCoords.lon
    
    console.log($getCoords)
    fetchWeather()
  }
  async function fetchWeather() {
     $weather = [];
     if (validCoords) {

     }
    // console.log($cities)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=fr`;
    const { data } = await axios.get(url);
    console.log(url)

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
    
    // const { lon, lat } = coords;
    const oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=fr&exclude=${exclude}&appid=${apiKey}`;

    console.log(oneCallUrl)
    // let forecast = [];
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

    $weather = [...$weather, {city: name.toLowerCase(), coords: {lat, lon}, now: currentData, days: days } ]
    
    
    return $weather;
  }




  $cities = []
  function convertCoord(val, neg, pos) {
    let mn;
    let s;
    let s2
    if (val < 0) s2 = neg
    else s2 = pos
    const absVal = Math.abs(val)
    const deg = Math.floor(absVal );


    let newCoord = `${deg}°`;
    if (absVal - deg != 0) {
      mn = 60 * (absVal - deg);
      newCoord += `${Math.floor(mn)}'`;

    }
    if (mn - Math.floor(mn) != 0) {
      s = Math.floor(60 * (mn - Math.floor(mn)));

      if (s != 0) {
        newCoord = `${deg}°${Math.floor(mn)}'${s}'' `;
      }
    }
    newCoord += s2

    return newCoord;
  }
  $: console.log($cities.length)
  const gotPos = $cities.length || $getCoords.lat != undefined
</script>
<Head title="Quel temps fait-il?" />

<GetPosition />
<!-- <Container md> -->
  {#if !$weather.length }
  <!-- <div class="mx-auto"> -->
    <Progress class="mx-1" animated color={gotPos ? "success" : "warning"} value="100" />
  {/if}
  {#if validCoords}
  <div class="mx-1">
    <Form />
  </div>
  {/if  }
 
  {#each $weather as fc}
  <div class="card bg-secondary text-light my-3 mx-1" width="100%">
    <Forecast {fc}>
      <div class="card-header">
        <h3 class="city"><i class="bi-geo mr-2"></i>{fc.city.toUpperCase()}</h3>
        <h3 class="coords"><i class="bi-geo-alt mr-2"></i>
          <em>
            {convertCoord(fc.coords.lat, "S", "N")} / {convertCoord(fc.coords.lon, "O", "E")}
          </em>
        </h3>
      </div>
    </Forecast >
  </div>
{/each}
<!-- </Container> -->
