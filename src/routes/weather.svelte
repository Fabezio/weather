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
  let city = "paris";
  let entry = "";
  onMount(() => fetchData());
  let weather = [];
  const exclude = "hourly,minutely,alerts";

  // const cities = "nantes paris lille".split(" ")
  // let gatheredData= []

  async function fetchData() {
    // for(let city of cities) {
    // if(city.length) {city = ""; weather=[]}
    // city = entry
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;
    const { data } = await axios.get(url);
    console.log(url)
    // console.table(data)
    // data.weather.map(fc=>console.table(fc))
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
    // data = [..., gatherData]
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
    // console.table(currentData)
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
        // console.table(dayData)
      days = [...days, dayData]
    } )

      // const { dt, sunrise, sunset, temp, feels_like, pressure, humidity, dew_point, wind_speed, wind_deg, uvi, clouds, weather } = day;

    for (let [key, value] of Object.entries(current)) {
      // console.log(key, typeof value);
    }
    daily.map((day, i) => {
      // console.log(i,"-----")
      for (let [key, value] of Object.entries(day)) {
        
        // console.log(key, typeof value);
      }
      
    })
    
    
    // console.table(commonData)
    // let dayKeys = []

    // console.table(current)
    
    // daily.map(day => {
    //   const weatherSummary = {
    //     description: day.weather[0].description,
    //     icon: `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${day.weather[0].icon}.png`,
    //   };

    //   const newForecast = {
    //     dt: day.dt,
    //     temp: day.temp,
    //     felt: day.feels_like,
    //     weather: weatherSummary,
    //   };
    //   // console.table(newForecast.weather);
    //   forecast = [...forecast, newForecast];
    // });
    weather = [...weather, { coords, now: currentData, days: days }];
    // console.log(url)
    // console.log(oneCallUrl)
    // console.log(gatheredData)
    // }
    // console.table(weather);
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
    // console.log(deg)
    // console.log(absVal)
    let newCoord = `${deg}°`;
    if (absVal - deg != 0) {
      mn = 60 * (absVal - deg);
      newCoord += `${Math.floor(mn)}'`;
      // console.log(mn)
    }
    if (mn - Math.floor(mn) != 0) {
      s = Math.floor(60 * (mn - Math.floor(mn)));
      // console.log(`${s}''`)
      if (s != 0) {
        newCoord = `${deg}°${Math.floor(mn)}'${s}'' `;
      }
    }
    newCoord += s2
    // const s = Math.floor(60*(val - deg) - 3600*(val-deg-mn))
    return newCoord;
  }


  $: console.log(weather)
</script>

<Head title="Quel temps fait-il?" />
<!-- <form on:submit|preventDefault={fetchData}>
  <input bind:value={entry} placeholder="ville" />
  <button type="submit">consulter</button>
</form>  -->
<!-- <Button width="4px" size="7em" background="silver" color="gray" >Carquefou</Button> -->
<!-- <Button width="4px" size="7em" background="silver" color="gray" >Nantes</Button>
<Button width="4px" size="7em" background="silver" color="gray" >Paris</Button> -->
<!-- <OneCallForecast /> -->
{#each weather as fc}
  <div class="gap">
    <Forecast width="100%" {fc}>
      <div slot="header">
        <div class="forecast-title">
          <h3 class="city">{city.toUpperCase()}</h3>
          <h3 class="coords">
            <em>
              {convertCoord(fc.coords.lat, "S", "N")} / {convertCoord(fc.coords.lon, "O", "E")}
              </em>
          </h3>
        </div>
      </div>
      <div slot="content">
        <section>
          <!-- <CurrentForecast0
            main={now.main}
            icon={now.icon}
            weather={now.weather}
            {days}
          /> -->
        </section>
      </div>
    </Forecast >
  </div>
{/each}
<!-- 
<style lang="scss">
  @import "../vars.scss";
  .gap {
    margin: 1em;
  }

  // form {
  //   margin: 0 auto 2em;
  // }
  .forecast-title {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    * {
      color: $light-txt;
    }
    .coords {
      float: right;
    }
  }

  section {
    padding-left: 12px;
    //  div {
    //   display: grid;
    //   grid-template-columns: 1fr  1fr;
    // }
  }
  div {
    text-align: justify;
    // display: grid;

    grid-template-columns: 2fr 1fr;
  }
</style> -->
