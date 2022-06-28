<script>
  import Geolocation from "svelte-geolocation";
  import {getCoords} from "$lib/store/forecast"
  let coords = [];
  $: if(coords[0] != undefined) {
    $getCoords = {
      lat: coords[0],
      lon: coords[1]
    }

    console.log($getCoords)
  }
  
</script>

<Geolocation getPosition bind:coords />

<pre>{JSON.stringify(coords)}</pre>