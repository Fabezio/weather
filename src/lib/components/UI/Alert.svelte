<script>
  import Container from "$lib/components/UI/Container.svelte"
  export let variant = ""
  export let rounded = false
</script>
<!-- <Container> -->
<div class="alert alert-{variant} {rounded && 'rounded'}">
  <!-- <div class="text {color}-txt"> -->
    <slot />

  <!-- </div> -->
</div>
<!-- </Container> -->

<!-- 
<style>
  .alert {
    border-width: 3px;
    border-style: solid;
    padding: 1em;
    border-radius: 10px;
  } 
  .alert div {
    font-weight: 600;
  }
    
  .red-bg {
    border-color: darkred;
    background: red;
  }
  .red-txt {
    color: darkred;
  }
  .sky-bg {
    background: skyblue;
    border-color: rgb(37, 168, 255);
  }
  .sky-txt {
    /* color: skyblue; */
    color: rgb(37, 168, 255);
  }
  
  .yellow-bg {
    border-color: goldenrod;
    background: yellow;
    
  }
  .yellow-txt {
    color: goldenrod;
    }
</style> -->
