<script>
  import DailyForecast from './DailyForecast.svelte'
  // export let temp
  export let main
  export let icon
  export let weather
  export let days
  // export let sys
  // export let date
  // const dateFormatter = Intl.DateTimeFormat("fr", {
  //   weekday: "long",
  //   month: "long",
  //   day: "numeric",
  //   year: "numeric",
  // })
  // const timeFormatter = Intl.DateTimeFormat("fr", {
  //   hour: "2-digit",
  //   minute: "2-digit"
  // })
</script>

<!-- <div>Date: {date}</div> -->
<!-- <div>lever: {timeFormatter.format(sys.sunrise)}, crépuscule: {timeFormatter.format(sys.sunset)}</div> -->

<article class="current-forecast">
  <div  class="frame">
    <div class="thumbnail">
      <img src={icon} alt="logo" title={weather.description}>
    </div>
  </div >

  <div  class="temp">
    <h4>Températures (en °C)</h4>
    <div class="list">
      <div class="item">
        <div class="title">Globale:</div>
        <div class="detail">{main.temp.toFixed(1)}</div>
      </div>
      <div class="item">
        <div class="title">Minimale:</div>
        <div class="detail">{main.temp_min.toFixed(1)}</div>
      </div>
      <div class="item">
        <div class="title">Maximale:</div>
        <div class="detail">{main.temp_max.toFixed(1)}</div>
      </div>
    </div>
  </div >
  <!-- </div> -->
  <div  class="pressure">
    <h4>Pression</h4>
    <div class="list">
      <div class="item">
        <div class="title">hectopascals:</div>
        <div class="detail">{main.pressure} hPa</div>
      </div>
      <div class="item">
        <div class="title">barométrique:</div>
        <div class="detail">{((main.pressure)/1000).toFixed(1)} Bar</div>
      </div>
    </div>
  </div >
  <div  class="other-forecasts">
    <!-- <hr style="color: maroon;"> -->
    <div>
      <DailyForecast {days} />

    </div>
  </div >
  <!-- </div> -->
</article>

<style lang="scss" >
@import "../../../vars.scss";
.current-forecast {
  display: grid;
  width: 100%;
  grid-template-columns: 200px 2fr 2fr;
  // grid-template-rows: 1fr 1fr;
  grid-gap: 1em;
  grid-template-areas:
    "image temp pressure"
    "image days days";
  color: $light-txt;
}

.frame {
  grid-area: image;
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
  .thumbnail {
    background: $dark-bar;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
  }
}
.temp {
  grid-area: temp;
}
.pressure {
  grid-area: pressure;
}

div, div * {
  color: $light-txt;
}
.list {
  display: flex;
  justify-content: space-evenly;
}
div span {
  color: $light-txt;
}
.other-forecasts {
  > div {
    border-top: 2px ridge brown;
    padding-top: 1em;
  }
  grid-column: span 2 / -1;
  grid-area: days;
}

// article {
//   div {
//     margin: 0;
//   } 
//   div  {
//     padding-left: 1em;
//   }
// }
</style>