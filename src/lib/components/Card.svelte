<script>
  export let width="14"
  export let title = "title"
  
</script>
<div class="card" style="width: {width}em">
  <div class="card-head">
    <h3 class="card-title">{title}</h3>
  </div>
  <div class="card-body">
    <p class="card-content"><slot name="content"/></p>
  </div>
  <div class="card-footer">
    <h4><slot name="footer"/></h4>
  </div>
</div>

<style>
  .card {
    /* background:  #333 ; */
    /* background: linear-gradient(90deg, rgba(0, 255, 255, .6) 2%, #333 4%); */
    border: 2px solid gray;
    border-radius: 8px;
    
    /* width: 10em; */
    /* max-width: 20em; */
  }
  .card-title {
    text-transform: uppercase;
    text-align: center;
    /* color: var(--light-txt); */
  }
  .card-body {
    min-height: 5em;
    color: inherit;
  }
  .card-content {
    font-size: 1.1em;
    padding: 0 0.5em;
    text-align: justify;
    /* color: var(--light-txt); */
  }


  .card-head, .card-body {
    padding: 0 1em;
    border-bottom: 2px solid gray;
  }
  .card-footer {
    padding: 0 1em;
    text-align: center;
    /* color: var(--light-txt); */
  }
  
</style>