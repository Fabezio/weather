<script>
  import DailyForecast from './Daily.svelte'
  import {dateFormatter, timeFormatter} from "$lib/utils/dateFormats";
  
  export let dataSet
  
</script>
<!-- <div class="card bg-dark"> -->
  <div class="row">
    <div class="col-md-1">
      <img src='https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/{dataSet.weather.icon}.png' class="card-img-left" alt="icone" >
    </div>

    <div class="col-md-10 offset-md-1">
      <div class="row">
        <div class="card-body text-light">
          
          <h5 class="card-title"><i class="mr-2 bi-calendar"></i> {dateFormatter.format(dataSet.dt*1000)}</h5>
          <!-- <h5 class="card-title">{dataSet.name}</h5> -->
        </div>

      </div>
      <div class="row">
        <div class="col">
          <div class="card-body text-light">
            <p class="card-text"><i class="mr-2 bi-rainbow"></i> {dataSet.weather.description}</p>
            <p class="card-text"><i class="mr-2 bi-thermometer"></i> {dataSet.temp}°C</p>
            <p class="card-text"><i class="mr-2 bi-thermometer-snow"></i> {dataSet.feels_like}°C</p>
          </div>

        </div>
        <div class="col">
          <div class="card-body text-light">
            <p class="card-title"><i class="mr-2 bi-brightness-alt-high text-warning"></i> {timeFormatter.format(dataSet.sunrise*1000)}</p>
            <p class="card-title"><i class="mr-2 bi-brightness-alt-low-fill"></i> {timeFormatter.format(dataSet.sunset*1000)}</p>

            <p class="card-text"><i class="mr-2 bi-moisture text-primary"></i> {dataSet.humidity}%</p>

          </div>

        </div>
        <div class="col">
          <div class="card-body text-light">
            <p class="card-title"><i class="mr-2 bi-thermometer"></i> {dataSet.pressure} hPa</p>
            <p class="card-title"><i class="mr-2 bi-droplet"></i> {dataSet.dew_point}%</p>
            <p class="card-text"><i class="mr-2 bi-sunglasses"></i> {dataSet.uvi}</p>

          </div>

        </div>
        <div class="col">
          <div class="card-body text-light">
            <p class="card-title"><i class="mr-2 bi-wind"></i> {dataSet.wind_speed} Km/h</p>
            <p class="card-title"><i class="mr-2 bi-droplet"></i> {dataSet.wind_deg}°C</p>
            <p class="card-title"><i class="mr-2 bi-cloud"></i> {dataSet.clouds}%</p>
            <!-- <p class="card-text"><i class="mr-2 bi-sun"></i> {dataSet.uvi}</p> -->

          </div>

        </div>
      </div>
    </div>

  </div>

<!-- </div> -->