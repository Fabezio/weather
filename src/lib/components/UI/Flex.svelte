<script>
  export let display = "center"
  export let direction = "row"
  export let column = false
  $: if (column) direction = "column"
  

</script>

<div class="d-flex flex-wrap flex-{direction} justify-content-{display}">
  <slot />
</div>

<style>
  .d-flex {
    flex: 1 0 100% !important;
  }
</style>