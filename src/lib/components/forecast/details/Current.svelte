<script>
  import DailyForecast from './Daily.svelte'
  import angles from "angles"
  import {dateFormatter, timeFormatter} from "$lib/utils/dateFormats";
  
  export let dataSet
  function convertDeg(val) {
    console.log("vent:", val+ "°")
    const rad = angles.toRad(val)
    const i = Math.round(rad*6/Math.PI)
    // const 
    const cardinal = [
      "N", "NNE", "NE", "ENE", 
      "E", "ESE", "SE", "SSE", 
      "S", "SSO", "SO", "OSO", 
      "O", "ONO", "NO", "NNO"
    ]
    console.log( i)
    
    // console.log( cardinal[Math.round(i)])
    return cardinal[i]
    // const cosinus = Math.cos(val)
    // const sinus =  Math.sin(val)
    // const tanA = Math.tan(val)
    // const cosA= Math.cos(val)
    // const sinA= Math.sin(val)
    // const coSin = [Math.abs(cosA) ==1, tanA < 1 ]
    // return coSin
    // return angles.compass(val)
  //   const diff = 11.25
  //  for(let i = 0; i < 16; i++) {

  //  }
  //   if (val <= 22.5 && val >= 337.5) return "N"
  //   else if (val <= 45) return "NE"
  //   else if (val <= 90) return "E"
  //   else if (val <= 135) return "SE"
  //   else if (val <= 180) return "S"
  //   else if (val <= 225) return "SO"
  //   else if (val <= 270) return "O"
  //   else if (val <= 315) return "NO"
  //   else return ""
  }
  
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
            <p class="card-title"><i class="mr-2 bi-wind"></i> {dataSet.wind_speed} Km/h {convertDeg(dataSet.wind_deg)}</p>
            <p class="card-title"><i class="mr-2 bi-cloud"></i> {dataSet.clouds}%</p>
            <!-- <p class="card-text"><i class="mr-2 bi-sun"></i> {dataSet.uvi}</p> -->

          </div>

        </div>
      </div>
    </div>

  </div>

<!-- </div> -->