<script>
$:innerWidth=0
</script>
  <svelte:window bind:innerWidth={innerWidth} />

<!-- </svelte:window> -->
<pre>
  {innerWidth}

</pre>
<div>
  <slot />
</div>
<style>
  div {
    width: 1024px;
    margin: 0 auto;
  }
</style>