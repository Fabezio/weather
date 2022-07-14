<script>
  export let display = "center"
  export let direction = "row"
<<<<<<< HEAD
  export let gap = "0"
  export let column = false
  export let wrap = false
  $: if (column) direction = "around"
  // $: if (wrap) direction = "column"
=======
  export let column = false
  $: if (column) direction = "column"
>>>>>>> 15e8d16 (détail affichage courant: flex)
  

</script>

<<<<<<< HEAD
<div class="d-flex {wrap && "flex-wrap"} gap-{gap} flex-{direction} justify-content-{display}">
=======
<div class="d-flex flex-wrap flex-{direction} justify-content-{display}">
>>>>>>> 15e8d16 (détail affichage courant: flex)
  <slot />
</div>

<style>
  .d-flex {
<<<<<<< HEAD
    flex: 1 1 100% !important;
=======
    flex: 1 0 100% !important;
>>>>>>> 15e8d16 (détail affichage courant: flex)
  }
</style>