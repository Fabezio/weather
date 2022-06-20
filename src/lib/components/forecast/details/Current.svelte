<script>
  import DailyForecast from './Daily.svelte'
  import {dateFormatter} from "$lib/utils/dateFormats";
  // export let temp
  // export let main
  // export let icon
  // export let weather
  // export let days
  export let dataSet
  // const dateFormatter = Intl.DateTimeFormat("fr", {
  //   weekday: "long",
  //   month: "long",
  //   day: "numeric",
  //   year: "numeric",
  // });
  // console.table(dataSet)
  // export let sys
  // export let date
  // const dateFormatter = Intl.DateTimeFormat("fr", {
  //   weekday: "long",
  //   month: "long",
  //   day: "numeric",
  //   year: "numeric",
  // })
  // const timeFormatter = Intl.DateTimeFormat("fr", {
  //   hour: "2-digit",
  //   minute: "2-digit"
  // })
</script>
<div class="card bg-dark">
  <div class="row">
    <div class="col-md-1">
      <img src='https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/{dataSet.weather.icon}.png' class="card-img-left" alt="icone" >

    </div>
    <div class="col-md-10 offset-md-1">
      <div class="card-body text-light">
        <h5 class="card-title">date: {dateFormatter.format(dataSet.dt*1000)}</h5>
        <!-- <h5 class="card-title">{dataSet.name}</h5> -->
        <p class="card-text">{dataSet.weather.description}</p>
        <p class="card-text">Température: {dataSet.temp}°C</p>
        <p class="card-text">Ressenti: {dataSet.feels_like}°C</p>
      </div>
    </div>

  </div>

</div>
<!-- <div>Date: {date}</div> -->
<!-- <div>lever: {timeFormatter.format(sys.sunrise)}, crépuscule: {timeFormatter.format(sys.sunset)}</div> -->
<!-- <div>
  {dataSet}
</div> -->
<!-- <pre>
  {JSON.stringify(dataSet, null, 2)}
</pre> -->