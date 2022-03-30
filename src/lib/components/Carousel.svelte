<script>
  import {createEventDispatcher} from "svelte"

  const dispatch = createEventDispatcher()
</script>

<section>
<button on:click={()=>dispatch("previous")}>-</button>
<slot />
<button on:click={()=>dispatch("next")}>+</button>
</section>
<style>
  section {
    display: flex;
  }
</style>