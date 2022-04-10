<script>
  import {newCoords} from "$lib/store/geo"
  import Geolocation from "svelte-geolocation";
  $: $newCoords = coords
  let coords = [];
</script>

<Geolocation getPosition bind:coords />

<!-- <pre>{JSON.stringify(coords)}</pre> -->