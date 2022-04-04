<script>
  // export let temp
  export let main
  export let icon
  export let weather
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
  <div class="frame">
    <div class="thumbnail">

      <img src={icon} alt="logo" title={weather.description}>
    </div>

   </div>
   <div>

     <div>
  
       <!-- <h4>Temps: {weather.description}</h4> -->
       <h4>Températures (en °C)</h4>
       <section>

         <div><span class="list-start">Globale:</span> <span class="list-end">{main.temp}</span></div>
         <div><span class="list-start">Minimal:</span> <span class="list-end">{main.temp_min}</span></div>
         <div><span class="list-start">Maximal:</span> <span class="list-end">{main.temp_max}</span></div>
       </section>
       
       
      </div>
      <div>
        <h4>Pression</h4>
        <section>

          <div><span class="list-start">barométrique:</span> <span class="list-end">{main.pressure} hPa</span></div>
        </section>
      </div>
   </div>
       
     </article>

     <style lang="scss">
       .current-forecast {
    display: grid;
    grid-template-columns: 1fr 2fr;
    color: var(--light-txt);
    
  }

.frame {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
  .thumbnail {
    width: 200px;
    height: 200px;

  }
}
 div, div * {
    color: var(--light-txt);
    
  }
  div span {
    color: var(--light-txt);

  }
  
  article
   {
     div {
      margin: 0;
     } 
     section {
    padding-left: 1em;
  }
  }
     </style>