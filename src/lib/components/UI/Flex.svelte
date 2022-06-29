<script>
  export let display = "center"
  export let direction = "row"
  export let gap = "0"
  export let column = false
  export let wrap = false
  $: if (column) direction = "around"
  // $: if (wrap) direction = "column"
  

</script>

<div class="d-flex {wrap && "flex-wrap"} gap-{gap} flex-{direction} justify-content-{display}">
  <slot />
</div>

<style>
  .d-flex {
    flex: 1 1 100% !important;
  }
</style>