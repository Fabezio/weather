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
        <h5 class="card-title"><i class="mr-2 bi-calendar"></i> {dateFormatter.format(dataSet.dt*1000)}</h5>
        <!-- <h5 class="card-title">{dataSet.name}</h5> -->
        <p class="card-text"><i class="mr-2 bi-rainbow"></i> {dataSet.weather.description}</p>
        <p class="card-text"><i class="mr-2 bi-thermometer"></i> {dataSet.temp}°C</p>
        <p class="card-text"><i class="mr-2 bi-thermometer-snow"></i> {dataSet.feels_like}°C</p>
      </div>
    </div>

  </div>

<!-- </div> -->