<script>
  import "dotenv"
  import axios from "axios"
  const units="metric"
  const lang="fr"
  const exclude="hourly,minutely,alerts"
  const apiKey = "f6f03d4b430d972622542e12b63f852d"
  const city="carquefou"
  let forecast = []
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`
  async function fetch () {
    const {data} = await axios.get(url)
    forecast = [...forecast, data]
    return forecast
  }
  fetch()


  // console.log()
  
</script>

<pre>
  {url}
  <!-- {forecast} -->
  {JSON.stringify(forecast,null, 2)}

</pre>

<!-- </div> -->

<style>

</style>