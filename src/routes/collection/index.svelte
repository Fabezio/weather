<script>
  import Card from "$lib/components/Card.svelte";
  import Grid from "$lib/components/Grid.svelte";
  import Head from '$lib/components/Head.svelte';
  import Button from '$lib/components/Button.svelte';
  const collection = [
    {title: "Ça marche", content: "C'est <mark>trop</mark> de la balle", footer: "on valide"},
    {title: "Un peu de style", content: "Pour dynamiser tout ça", footer: "C'est pas mieux?"},
    {title: "Et bien sûr…", content: "<div>Il faudra penser à créer une base de données</div>", footer: "Et tout le monde est content!"},
  ]
</script>

<Head title="Collection" />

<Grid >
  {#each collection as {title, content, footer} }
    
  <Card width="17" {title} >
    <div slot="content" >
      {@html content}

    </div>

    <span slot="footer" ><Button background="whitesmoke">Voir le détail</Button></span>
    <!-- <span slot="footer" >{footer}</span> -->
    </Card>
  {/each}
  <!-- <Card width="20" title="Carte 1" >
    <span slot="content">trop content, ca marche</span>
    <span slot="footer" >mets un truc ici</span>
    </Card>
  <Card width="20" title="Un autre titre" >
    <span slot="content">trop content, ca marche</span>
    <span slot="footer" >met un truc ici</span>
    </Card>
  <Card width="20" title="machin truc" >
    <span slot="content">trop content, ca marche</span>
    <span slot="footer" >met un truc ici</span>
    </Card>
  <Card width="20" title="machin truc" >
    <span slot="content">trop content, ca marche</span>
    <button slot="footer" >clique ici</button>
    </Card> -->

</Grid>

<style>
  
</style>