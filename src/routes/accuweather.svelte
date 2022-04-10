<script>
  import {onMount} from "svelte"
  import axios from "axios"
  const apiKey = "efaeonBSSM9rHHMxtKUdeSYGC6NGDMGi"
  const url = `http://api.accuweather.com/locations/v1/search?q=san&apikey=${apiKey}`
  console.log(url)
let forecast = []
  async function fetch() {
    const {data} = await axios.get(url)
    console.table(data)
    forecast = [...forecast, data]
  }
  onMount(()=>fetch())
</script>
<pre>
  {JSON.stringify(forecast)}
</pre>