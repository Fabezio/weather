<script>
import Link from "./Link.svelte"
export let links
</script>
<ul>

    {#each links as {url, label}}

    <Link {url} {label} />
    {/each}

</ul>

    <style>
ul {
  position: relative;
  padding: 0;
  margin: 0;
  height: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;

  background-size: contain;
}
@media screen and (min-width: 1024px) {
  ul {

    flex-direction: row;
  }
}
</style>
