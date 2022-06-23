<script>
  export let db
</script>
{#if !db.length || !db}
<div class="text-center">
  <div class="spinner-border spinner-border-5 text-primary text-center" role="status">
    <!-- <span class="visually-hidden">Loading...</span> -->
  </div>
  <p class="mt-3"> 
    Veuillez patienter, nous collectons les informations ...

  </p>
</div>
{/if}