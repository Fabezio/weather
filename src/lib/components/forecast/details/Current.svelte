<script>
  import CurrentItem from './CurrentItem.svelte'
  import {Col, Row} from "sveltestrap"
  import Container from '$lib/components/UI/Container.svelte';
  import Flex from '$lib/components/UI/Flex.svelte';
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
  let width 
  $: switch ($bk) {
    case "xs": 
      width = 8
      break
    case "sm": 
      width = 8
      break
    case "md": 
      width = 6
      break
      
    case "lg": 
      width = 6
      break
    case "xl": 
      width = 4
      break
    case "xxl": 
      width = 2
      break
    // default: 
    //   width= 
    

  }
  
</script>

<Container >
  <!-- <Flex display="start"> -->
    <Row>
      <Col xs="12" md="2">
        <figure class="" >
          <img src='https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/{dataSet.weather.icon}.png' class="card-img-left" alt="icone" >
        </figure>
      </Col>
      <Col xs="12" md="10">

        <div>
          
          <h5 class="card-title " ><i class="mr-3 bi-calendar" ></i>{dateFormatter.format(dataSet.dt*1000)}, {timeFormatter.format(dataSet.dt*1000)}</h5>
          <Flex display="between" >
            <div class="m-2" >
              <CurrentItem icon="cloud-sun-fill" color="info" >{dataSet.weather.description}</CurrentItem>
              <CurrentItem icon="thermometer" >{dataSet.temp}°C</CurrentItem>
              <CurrentItem icon="thermometer-snow" >{dataSet.feels_like}°C</CurrentItem>
            </div>
            <div class="m-2" >
              <CurrentItem icon="sun" color="warning" >{timeFormatter.format(dataSet.sunrise*1000)}</CurrentItem>
              <CurrentItem icon="brightness-low-fill" color="dark" >{timeFormatter.format(dataSet.sunset*1000)}</CurrentItem>
              <CurrentItem icon="moisture" color="info" >{dataSet.humidity}%</CurrentItem>
            </div>
            
            <div class="m-2" >
              <CurrentItem icon="speedometer" >{dataSet.pressure} hPa</CurrentItem>
              <CurrentItem icon="droplet" >{dataSet.dew_point}%</CurrentItem>
              <CurrentItem icon="cloud" >{dataSet.clouds}%</CurrentItem>
            </div>
            <div class="m-2" >
              <CurrentItem icon="wind" >{dataSet.wind_speed} Km/h</CurrentItem>
              <CurrentItem icon="compass" >{convertDeg(dataSet.wind_deg)}</CurrentItem>
              <CurrentItem icon="sunglasses" > {dataSet.uvi}</CurrentItem>
            </div>
          </Flex>
          
        </div>
      </Col>
    </Row>
    
  <!-- </Flex> -->
  </Container>
  
  <div></div>