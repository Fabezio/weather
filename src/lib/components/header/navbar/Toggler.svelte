<script>
  import {createEventDispatcher} from "svelte";
  const dispatch = createEventDispatcher();
</script>

<button on:click={()=> dispatch("toggle")} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>