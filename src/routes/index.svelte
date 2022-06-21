<script lang="ts" context="module">
export const prerender = true; 
</script>

<script lang="ts" >
  // import 'bootstrap-icons'
  

  import Head from "$lib/components/UI/Head.svelte";
  import Button from "$lib/components/UI/Button.svelte"
  import Modal from "$lib/components/UI/Modal.svelte";
  import Alert from "$lib/components/UI/Alert.svelte";
  let openModal = false
</script>

<Head title="Bienvenue!" />
<section>
  <Alert variant="warning" rounded>
    <a href="#" class="alert-link">
      <strong>Attention!</strong>
      </a>
    hello
    </Alert>
  <Button on:click={()=>openModal=true} width="10em">Click me</Button>
  {#if openModal}
  <Modal on:close={()=>openModal=false} />
   {/if}
   
</section>
<!-- 
<style>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}

</style> -->
