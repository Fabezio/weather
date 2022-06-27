<script>
  import CurrentItem from './CurrentItem.svelte'
  import {Col, Row, Container} from "sveltestrap"
  import angles from "angles"
  import {bk} from "$lib/store/breakpoints"
  import {dateFormatter, timeFormatter} from "$lib/utils/dateFormats";
  
  export let dataSet
  function convertDeg(val) {
    console.log("vent:", val+ "°")
    const rad = angles.toRad(val)
    const i = Math.round(rad*6/Math.PI)
    // const 
    const cardinal = [
      "N", "NNO", "NO", "ONO", 
      "E", "OSO", "SO", "SSO", 
      "S", "SSE", "SE", "ESE", 
      "O", "ENE", "NE", "NNE"
    ]
    console.log( i)
    
    // console.log( cardinal[Math.round(i)])
    return cardinal[i]
    
  }
  
</script>
<Row>
  <div class="col-md-1" >
    <img src='https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/{dataSet.weather.icon}.png' class="card-img-left" alt="icone" >
  </div>
  
  <div class="col-md-10 offset-md-1" >
      <Container >
      <Row class="mb-3" >
        <h5 class="card-title " ><i class="mr-3 bi-calendar" ></i> {dateFormatter.format(dataSet.dt*1000)}, {timeFormatter.format(dataSet.dt*1000)}</h5>
      </Row>
      
      <Row>
        <Col>
          <CurrentItem icon="cloud-sun-fill" color="info" >{dataSet.weather.description}</CurrentItem>
          <CurrentItem icon="thermometer" >{dataSet.temp}°C</CurrentItem>
          <CurrentItem icon="thermometer-snow" >{dataSet.feels_like}°C</CurrentItem>
        </Col>
        <Col>
          <CurrentItem icon="sun" color="warning" >{timeFormatter.format(dataSet.sunrise*1000)}</CurrentItem>
          <CurrentItem icon="brightness-low-fill" color="dark" >{timeFormatter.format(dataSet.sunset*1000)}</CurrentItem>
          <CurrentItem icon="moisture" color="info" >{dataSet.humidity}%</CurrentItem>
        </Col>
        
        <Col>
          <CurrentItem icon="speedometer" >{dataSet.pressure} hPa</CurrentItem>
          <CurrentItem icon="droplet" >{dataSet.dew_point}%</CurrentItem>
          <CurrentItem icon="cloud" >{dataSet.clouds}%</CurrentItem>
        </Col>
        <Col>
          <CurrentItem icon="wind" >{dataSet.wind_speed} Km/h</CurrentItem>
          <CurrentItem icon="compass" >{convertDeg(dataSet.wind_deg)}</CurrentItem>
          <CurrentItem icon="sunglasses" > {dataSet.uvi}</CurrentItem>
        </Col>
      </Row>
    </Container>
    </div>
  </Row>
  