<script>
  import { onMount } from "svelte";
  import {dateFormatter} from "$lib/utils/dateFormats";
  import OneCallForecast from "$lib/components/forecast/OneCallForecast.svelte";
  import Button from '$lib/components/UI/Button.svelte';
  import Head from "$lib/components/UI/Head.svelte";
  import Grid from "$lib/components/UI/Grid.svelte";
  import Forecast from "$lib/components/forecast/Forecast.svelte";

  import axios from "axios";

  import { api } from "./todos/_api";

  
  // let url
  // async function getUrl(val) await url =
  const apiKey = "f6f03d4b430d972622542e12b63f852d";
  // let loading=true
  let city = "paris";
  let entry = "";
  onMount(() => {

    fetchData()
  });
  let weather = [];
  const exclude = "hourly,minutely,alerts";

  
  async function fetchData() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;
    const { data } = await axios.get(url);
    console.log(url)

    const coords = {
      lat: data.coord.lat,
      lon: data.coord.lon,
    }

    const gatherData = {
      icon: `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${data.weather[0].icon}.png`,
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

    weather = [...weather, { coords, now: currentData, days: days }];
    
    return weather;
  }
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


  $: console.log(weather.length)
</script>

<Head title="Quel temps fait-il?" />
{#if !weather || !weather.length }
<div class="text-center">
  <div class="spinner-border spinner-border-5 text-primary text-center" role="status">
    <!-- <span class="visually-hidden">Loading...</span> -->
  </div>
  <p class="mt-3"> 
    Veuillez patienter, nous collectons les informations ...

  </p>
</div>

<!-- <div class="text-center">
</div> -->
{/if}

{#each weather as fc}
<div class="card bg-dark text-light" width="100%">
  <Forecast {fc}>
    <div class="card-header">
      <h3 class="city"><i class="bi-geo mr-2"></i>{city.toUpperCase()}</h3>
      <h3 class="coords"><i class="bi-geo-alt mr-2"></i>
        <em>
          {convertCoord(fc.coords.lat, "S", "N")} / {convertCoord(fc.coords.lon, "O", "E")}
          </em>
      </h3>

    </div>

    </Forecast >
  </div>
{/each}