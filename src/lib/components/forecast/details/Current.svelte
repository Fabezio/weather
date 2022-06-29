<script>
  import CurrentItem from './CurrentItem.svelte'
  import {Col, Row} from "sveltestrap"
  import Container from '$lib/components/UI/Container.svelte';
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
  const {weather, dt, temp, feels_like, sunrise, sunset, humidity, pressure, dew_point, uvi, clouds, wind_deg, wind_speed} = dataSet
  
</script>
<Row>
  <div class="col-md-1" >
    <img src='https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/{weather.icon}.png' class="card-img-left" alt="icone" >
  </div>
  
  <div class="col-md-10 offset-md-1" >
      <Container >
      <Row class="mb-3" >
        <h5 class="card-title " ><i class="mr-3 bi-calendar" ></i>{dateFormatter.format(dt*1000)}, {timeFormatter.format(dt*1000)}</h5>
      </Row>
      
      <Row>
        <Col>
          <CurrentItem icon="cloud-sun-fill" color="info" >{weather.description}</CurrentItem>
          <CurrentItem icon="thermometer" >{temp}°C</CurrentItem>
          <CurrentItem icon="thermometer-snow" >{feels_like}°C</CurrentItem>
        </Col>
        <Col>
          <CurrentItem icon="sun" color="warning" >{timeFormatter.format(sunrise*1000)}</CurrentItem>
          <CurrentItem icon="brightness-low-fill" color="dark" >{timeFormatter.format(sunset*1000)}</CurrentItem>
          <CurrentItem icon="moisture" color="info" >{humidity}%</CurrentItem>
        </Col>
        
        <Col>
          <CurrentItem icon="speedometer" >{pressure} hPa</CurrentItem>
          <CurrentItem icon="droplet" >{dew_point}%</CurrentItem>
          <CurrentItem icon="cloud" >{clouds}%</CurrentItem>
        </Col>
        <Col>
          <CurrentItem icon="wind" >{wind_speed} Km/h</CurrentItem>
          <CurrentItem icon="compass" >{convertDeg(wind_deg)}</CurrentItem>
          <CurrentItem icon="sunglasses" > {uvi}</CurrentItem>
        </Col>
      </Row>
    </Container>
    </div>
  </Row>
  