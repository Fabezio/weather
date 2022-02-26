<script>
import Card from "$lib/components/Card.svelte";

  import Head from "$lib/components/Head.svelte"
// import Card from "$lib/components/"
  const family = [
    {rank: "mari", name: "pépé", status: "marié", children: [
      {name: "gamin"}
    ]
  },
  {rank: "mari", name: "papi", status: "séparé"
  }
  ]
</script>

<Head title="famille" />
{#each family as {rank, name, status, children}}
<!-- {#if children}
<svelte:self {...children} />
{:else} -->
<Card width="25" title={name} />
<!-- {/if} -->

{/each}