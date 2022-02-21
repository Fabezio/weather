<script>
  import Card from "$lib/components/Card.svelte";
  import Grid from "$lib/components/Grid.svelte";
</script>
<Grid >
  <Card width="20" title="Carte 1" >
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
    </Card>

</Grid>