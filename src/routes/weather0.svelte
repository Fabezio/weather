<script>
  import {onMount} from "svelte"
  import Head from "$lib/components/Head.svelte"
  import Grid from "$lib/components/Grid.svelte"
  import Card from "$lib/components/Card.svelte"
  import axios from "axios"
import { dataset_dev } from "svelte/internal";
  
  const apiKey = "f6f03d4b430d972622542e12b63f852d"
  const city = "nantes"
  const exclude=["hourly", "minutely", "current"]
  const coords = {lon: "-1.5833", lat: "47.1667"}
  const countryUrl = `https://api.openweathermap.org/data/2.5/weather?q=200&appid=${apiKey}&units=metric&lang=fr`
  const fourDaysForecast = `pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${apiKey}`
  const dailyForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=${exclude.join(',')}&appid=${apiKey}&lang=fr`
  const lang = "fr"
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
  }
  const formatter = Intl.DateTimeFormat(lang, {
    day: "numeric", 
    weekday: "long",
    month: "long",
    year: "numeric"
  })
  function formatDate(date) {
    return formatter.format(date)
  }

  let forecast = {}

  async function fetchForecast() {
    const {data} = await axios.get(dailyForecast)
    let days = []
    data.daily.map(day => {
      const thisDay = {
        dt: formatDate(day.dt),
        weather: day.weather[0].description
      }

      days = [...days, thisDay]
      return days
    })
    forecast= {...forecast, timezone: data.timezone}
    forecast = {...forecast, days}
    return forecast 
  }
  $: console.log(forecast)

  const cities = "nantes".split(" ")
        onMount(()=> fetchForecast())
      </script>
<Head title="{forecast.timezone}" />

<style>
</style>