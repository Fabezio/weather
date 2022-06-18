<script lang="ts" context="module">
export const prerender = true; 
</script>

<script lang="ts" >
  

  import Head from "$lib/components/UI/Head.svelte";
  import Button from "$lib/components/UI/Button.svelte"
</script>

<Head title="Bienvenue!" />
<section>
  <Button width="10em">Click me</Button>
  <!-- <Container /> -->
   
</section>

<style>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}

</style>
