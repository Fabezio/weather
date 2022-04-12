<script>
  export let msg = "Jusqu'ici tout va bien..."
  $: innerWidth=0
$: duration = (innerWidth / 60).toString()

</script>
<svelte:window bind:innerWidth={innerWidth} ></svelte:window>
<div id="tape">
  <p 
  id="scrolling-msg" style={`animation-duration: ${parseInt(duration)}s`} >{@html msg}</p>
</div>

<style>
#tape {

  min-width: 100%;

  background: #f77;

  padding: 0;
}
#scrolling-msg {
  min-width: 100%;
  height: 2em;
  /* word */
  font-size: 1.25rem;
  padding: 10px;
  margin: 0;
  animation: slide linear infinite;
  overflow-y: hidden;
  /* overflow: scroll; */
}


@keyframes slide {
  0% {
    transform: translateX(100%)
  }

  100% {
    transform: translateX(-100%)
  }
}
</style>