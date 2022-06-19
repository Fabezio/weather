<script>
  import { onMount } from "svelte";
  import OneCallForecast from "$lib/components/forecast/OneCallForecast.svelte";
  import Button from '$lib/components/UI/Button.svelte';
  import Head from "$lib/components/UI/Head.svelte";
  import Grid from "$lib/components/UI/Grid.svelte";
  import Forecast from "$lib/components/forecast/Forecast.svelte";
  import CurrentForecast0 from "$lib/components/forecast/CurrentForecast0.svelte";
  import axios from "axios";

  import { api } from "./todos/_api";

  const dateFormatter = Intl.DateTimeFormat("fr", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  // let url
  // async function getUrl(val) await url =
  const apiKey = "f6f03d4b430d972622542e12b63f852d";
  let city = "carquefou";
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

    const gatherData = {
      icon: `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${data.weather[0].icon}.png`,
      coord: data.coord,
      weather: data.weather[0],
      base: data.base,
      main: data.main,
      visibility: data.visibility,
      wind: data.wind,
      clouds: data.clouds,
      // date: dateFormatter.format(data.dt),
      sys: data.sys,
      timezone: data.timezone,
      id: data.id,
      name: data.name,
      cod: data.cod,
    };
    const { lon, lat } = gatherData.coord;
    const oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=fr&exclude=${exclude}&appid=${apiKey}`;
    // data = [..., gatherData]
    let forecast = [];
    const { daily, current } = await (await axios.get(oneCallUrl)).data;
    // console.table(current)
    daily.map(day => {
      const weatherSummary = {
        description: day.weather[0].description,
        icon: `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${day.weather[0].icon}.png`,
      };

      const newForecast = {
        dt: day.dt,
        temp: day.temp,
        felt: day.feels_like,
        weather: weatherSummary,
      };
      console.table(newForecast.weather);
      forecast = [...forecast, newForecast];
    });
    weather = [...weather, { now: gatherData, days: forecast }];
    // console.log(url)
    // console.log(oneCallUrl)
    // console.log(gatheredData)
    // }
    console.table(weather);
    return weather;
  }
  function convertCoord(val) {
    let mn;
    let s;
    const deg = Math.floor(val);
    let newCoord = `${deg}`;
    if (val - deg != 0) {
      mn = 60 * (val - deg);
      newCoord = `${deg}°${Math.floor(mn)}'`;
    }
    if (mn - Math.floor(mn) != 0) {
      s = Math.floor(60 * (mn - Math.floor(mn)));
      // console.log(s)
      if (s != 0) {
        newCoord = `${deg}°${Math.floor(mn)}'${s}"`;
      }
    }
    // const s = Math.floor(60*(val - deg) - 3600*(val-deg-mn))
    return newCoord;
  }

  // $: console.log(weather)
</script>

<Head title="Quel temps fait-il?" />
<!-- <form on:submit|preventDefault={fetchData}>
  <input bind:value={entry} placeholder="ville" />
  <button type="submit">consulter</button>
</form>  -->
<!-- <Button width="4px" size="7em" background="silver" color="gray" >Carquefou</Button> -->
<!-- <Button width="4px" size="7em" background="silver" color="gray" >Nantes</Button>
<Button width="4px" size="7em" background="silver" color="gray" >Paris</Button> -->
<OneCallForecast />
{#each weather as { now, days }}
  <div class="gap">
    <Forecast width="100%">
      <div slot="header">
        <div class="forecast-title">
          <h3 class="city">{city.toUpperCase()}</h3>
          <h3 class="coords">
            <em
              >{convertCoord(now.coord.lon)} / {convertCoord(now.coord.lat)}</em
            >
          </h3>
        </div>
      </div>
      <div slot="content">
        <section>
          <CurrentForecast0
            main={now.main}
            icon={now.icon}
            weather={now.weather}
            {days}
          />
        </section>
      </div>
    </Forecast>
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
