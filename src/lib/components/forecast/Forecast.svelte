<script>
export let width = "100%"
// export let title = "title"
export let hasFooter =false
// export let coord
</script>

<div class="forecast" style="width: {width}">
  <div class="forecast-head" style="width: {width}">
  <slot name="header" />
        
    </div>
    <div class="forecast-body">
        <p class="forecast-content"><slot name="content"/></p>
    </div>
    {#if hasFooter}
    <div class="forecast-footer">
        <h4><slot name="footer"/></h4>
    </div>
    {/if}
</div>

<style globals lang="scss">
@import "../../../vars.scss";
.forecast {
  background: $dark-bg;

  border: 2px solid gray;
  border-radius: 8px;
  color: $light-txt;
  margin: 0 auto 1em;
  
}

// .forecast-title {
//   color: $light-txt;
//   text-transform: uppercase;
//   text-align: left;
// }

.forecast-body {
  color: $light-txt;
}

.forecast-content {
  color: $light-txt;
  font-size: 1.1em;
  padding: 0 0.5em;
  text-align: justify;
}
.forecast-body {
  color: $light-txt;
  

}

.forecast-head,
.forecast-body {
  padding: 0 1em;
  color: $light-txt;
}
/* .forecast-head {
  display: grid;
  grid-template-columns: repeat(2, 1fr;
  justify-content: between;
} */

.forecast-footer {
  border-top: 2px solid gray;
  padding: 0 1em;
  text-align: center;
  color: $light-txt;
}
/* @media screen and (min-width: 1024px) {
  .forecast {
    width: 1024px;
  }
} */
</style>
