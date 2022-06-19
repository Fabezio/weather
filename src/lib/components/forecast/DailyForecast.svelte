<script>
  import df, {masks} from "dateformat"
  export let days
  const theseDays = "aujourd'hui demain après-demain".split(" ")
  // console.log(theseDays)
  const formatDate = val=> formatter.format(val)
  theseDays.map((day, idx)=> {
    // if(days[idx] <= day)
    days[idx].thisDay=day

  })
  console.log(new Date().getTime().toString().length)
  const formatter = Intl.DateTimeFormat("fr", {
    weekday: "short",
  day: "numeric",
  month: "numeric",
  // year: "2-digit"
  })
  // console.table(days)
</script>



  <div class="days">

    {#each days as {weather, temp, thisDay,dt}, i}

    <div class="thisday">
      {#if i < 7}
      <!-- {@debug (new Date(dt))} -->
      <img src="{weather.icon}" width="64" title={weather.description} alt="image">
      <!-- <div>{ new Date(dt)}</div> -->
      <div><small>{ formatDate(dt*1000)}</small></div>
        
      {/if}
    </div>
    <!-- <hr> -->
    {/each}
  </div>

<!-- 
<style lang="scss" >
  @import "../../../vars.scss";
  // h1 {
  //   color: white;
  // }
  img {
    border-radius: 50%;
    border: solid 3px maroon;
    /* margin: 8px; */
    /* padding: 4px; */
    background: rgba(255,255,255,.33);
    transition: ease-in-out 250ms all;
    &:hover {
  
      // transform: scale(1.2);
      // filter: hue-rotate(-15deg) brightness(120%);
      filter: drop-shadow(0px 0px 16px black) invert(90%);
      /* background: brown; */
  }
  }
  // hr {
  //   background: maroon;
  //   color: maroon;
  //   height: 2px;
  // }
  .days {
    box-sizing: border-box;
    display: flex;
    padding: 0;
    margin: 0;
    /* display:grid; */
    /* grid-template-columns: auto-fit(1fr); */
    justify-content: center;
  }
  .thisday {
    background: $dark-bg;
    width: 7em;
    figcaption {
      color: white;
      word-wrap: wrap;
    }
  }
</style> -->
