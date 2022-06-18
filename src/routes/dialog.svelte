<script>
  import Modal from "$lib/components/UI/Modal.svelte"
  import Button from "$lib/components/UI/Button.svelte"
  $: showModal=false
  function toggleModal() {
    return showModal = !showModal
  }
</script>
{#if showModal}
<Modal on:close={toggleModal} >
  <p >ceci est le contenu d'une boite de dialogue</p>
</Modal>

{:else}
<Button background="#0aF" color="#111" on:click={toggleModal} >click me</Button>

{/if}
<style>
  p {
    color: black;
  }
</style>