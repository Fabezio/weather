<script>
export let width = "100%"
export let title = "title"
export let hasFooter =false
</script>
<div class="forecast" style="width: {width}">
    <div class="forecast-head">
        <h3 class="forecast-title">{title}</h3>
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

<style globals>
.forecast {
  background: var(--dark-bg) ;

  border: 2px solid gray;
  border-radius: 8px;
  color: var(--light-txt);
}

.forecast-title {
  color: var(--light-txt);
  text-transform: uppercase;
  text-align: left;
}

.forecast-body {
  color: var(--light-txt);
}

.forecast-content {
  color: var(--light-txt);
  font-size: 1.1em;
  padding: 0 0.5em;
  text-align: justify;
}
.forecast-body {
  color: var(--light-txt);
  

}

.forecast-head,
.forecast-body {
  padding: 0 1em;
  color: var(--light-txt);
}

.forecast-footer {
  border-top: 2px solid gray;
  padding: 0 1em;
  text-align: center;
  color: var(--light-txt);
}
</style>
