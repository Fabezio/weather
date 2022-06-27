<script>
  import {createEventDispatcher} from "svelte";
  import {dateCompactFormatter} from "$lib/utils/dateFormats";
  
  export let day

  const dispatch = createEventDispatcher();
  // const theseDays = "aujourd'hui demain après-demain".split(" ")
  // console.table(day)
</script>

<div on:click={()=> dispatch("select")} class="detail">
  <figure>
    <img src='https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/{day.weather.icon}.png' width="100" alt="icone" >
    <figcaption class="text-center">

      <div class=" text-light">{dateCompactFormatter.format(day.dt*1000)}</div>
    </figcaption>
  </figure>

</div>

<style>
  .detail {
    max-width: 150px;
  }
</style>


