<script>
  import {bk} from "$lib/store/breakpoints"
$:innerWidth=0
</script>
  <!-- <svelte:window bind:innerWidth={innerWidth} /> -->

<!-- </svelte:window> -->
<!-- <pre>
  {innerWidth}

</pre> -->
<div class="container-{$bk}">
  <slot />
</div>
<!-- <style>
  div {
    width: 1024px;
    margin: 0 auto;
  }
</style> -->