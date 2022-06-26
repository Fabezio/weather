<script>
  // import Spinner from "$lib/components/UI/Spinner.svelte"
  import {Container, Spinner, Progress} from 'sveltestrap';
  import Head from "$lib/components/UI/Head.svelte";
  import Form from "$lib/components/UX/Form.svelte"
  import Forecast from "$lib/components/forecast/Forecast.svelte";
  import {weather, cities} from "$lib/store/forecast"
  
  // let cityForecast;
  const apiKey = "f6f03d4b430d972622542e12b63f852d";

  $cities = []
  function convertCoord(val, neg, pos) {
    let mn;
    let s;
    let s2
    if (val < 0) s2 = neg
    else s2 = pos
    const absVal = Math.abs(val)
    const deg = Math.floor(absVal );

    let newCoord = `${deg}°`;
    if (absVal - deg != 0) {
      mn = 60 * (absVal - deg);
      newCoord += `${Math.floor(mn)}'`;

    }
    if (mn - Math.floor(mn) != 0) {
      s = Math.floor(60 * (mn - Math.floor(mn)));

      if (s != 0) {
        newCoord = `${deg}°${Math.floor(mn)}'${s}'' `;
      }
    }
    newCoord += s2

    return newCoord;
  }
  $: console.log($cities.length)
</script>
<Head title="Quel temps fait-il?" />
<!-- <Container md> -->
  {#if !$weather.length }
  <!-- <div class="mx-auto"> -->
    <Progress class="mx-1" animated color={$cities.length ? "success" : "warning"} value="100" />
  {/if}
  <div class="mx-1">
    <Form />
  </div>
 
  {#each $weather as fc}
  <div class="card bg-secondary text-light my-3 mx-1" width="100%">
    <Forecast {fc}>
      <div class="card-header">
        <h3 class="city"><i class="bi-geo mr-2"></i>{fc.city.toUpperCase()}</h3>
        <h3 class="coords"><i class="bi-geo-alt mr-2"></i>
          <em>
            {convertCoord(fc.coords.lat, "S", "N")} / {convertCoord(fc.coords.lon, "O", "E")}
          </em>
        </h3>
      </div>
    </Forecast >
  </div>
{/each}
<!-- </Container> -->
