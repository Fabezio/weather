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
    

  }
  
</script>

<Container >
  <!-- <Flex display="start"> -->
    <Row>
<!-- <<<<<<< HEAD -->
      <Col xs="12" md="1">
        <img src='https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/{dataSet.weather.icon}.png' class="card-img-top" alt="icone" >
        <!-- <figure class="" >
        </figure> -->
      </Col>
      <Col xs="12" md="11">

        <div>
          
          <h5 class="card-title pl-0" ><i class="mr-3 bi-calendar" ></i>{dateFormatter.format(dataSet.dt*1000)}, {timeFormatter.format(dataSet.dt*1000)}</h5>
          <Flex gap="3" wrap display="start" >
            <div>

              <CurrentItem icon="cloud-sun-fill" color="info" >{dataSet.weather.description}</CurrentItem>
              <CurrentItem icon="thermometer" >{dataSet.temp}°C</CurrentItem>
              <CurrentItem icon="thermometer-snow" >{dataSet.feels_like}°C</CurrentItem>
            </div>
            <div>
              <CurrentItem icon="sun" color="warning" >{timeFormatter.format(dataSet.sunrise*1000)} - 
                <!-- </CurrentItem>
                  <CurrentItem icon="brightness-low-fill" color="dark" > -->
                    {timeFormatter.format(dataSet.sunset*1000)}</CurrentItem>
                    <CurrentItem icon="moisture" color="info" >{dataSet.humidity} mm</CurrentItem>
                    <CurrentItem icon="speedometer" >{dataSet.pressure} hPa</CurrentItem>
                  </div>
                  
                  <div>
                    <CurrentItem icon="droplet" >{dataSet.dew_point}%</CurrentItem>
                    <CurrentItem icon="cloud" >{dataSet.clouds}%</CurrentItem>
                    <CurrentItem icon="wind" >
                      {dataSet.wind_speed} Km/h <!-- &rArr; --> {convertDeg(dataSet.wind_deg)}
                      <!-- {dataSet.wind_speed} Km/h <span class="bi bi-compass" style="transform: rotate({(dataSet.wind_deg)}deg)" -->
                      </CurrentItem>
                    </div>
                    <div>
                      <!-- <CurrentItem icon="compass" >
                      </CurrentItem> -->
                      <!-- <CurrentItem icon="sunglasses" >{dataSet.uvi}</CurrentItem> -->
                      
            </div>
          </Flex>
          
        </div>
      </Col>
    </Row>
    
  <!-- </Flex> -->
  </Container>
  