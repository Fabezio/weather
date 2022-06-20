<script>
  import DailyForecast from './Daily.svelte'
  import {dateFormatter} from "$lib/utils/dateFormats";
  
  export let dataSet
  
</script>
<!-- <div class="card bg-dark"> -->
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

<!-- </div> -->