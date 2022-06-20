<script>
  import {createEventDispatcher} from "svelte";
  import df, {masks} from "dateformat"
  import {dateCompactFormatter} from "$lib/utils/dateFormats";
  export let day
  const dispatch = createEventDispatcher();
  // const theseDays = "aujourd'hui demain après-demain".split(" ")
  // console.table(day)
</script>
<div on:click={()=> dispatch("select")} class="card bg-dark">
  <img src='https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/{day.weather.icon}.png' alt="icone" >
  <div class="text-center text-light">{dateCompactFormatter.format(day.dt*1000)}</div>

</div>

<div>
  <!-- {} -->
</div>
<!-- <pre>
  {JSON.stringify(day, null, 2)}
  </pre> -->
