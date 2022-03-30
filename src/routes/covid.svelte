<script>
  import {onMount} from "svelte"
  import axios from "axios"
  const url = "https://data.gouv.fr/fr/reuses/coronavirusapi-france/"
  let reuses = {}

  async function fetchData () {
    const {data} = await axios.get(url)
    reuses = {...reuses, data}
    
  }
  onMount(()=>fetchData())


</script>
<div>{JSON.stringify(reuses)}</div>
