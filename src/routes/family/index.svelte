<script>
import Card from "$lib/components/UI/Card.svelte";

import Head from "$lib/components/UI/Head.svelte"

const family = [{
    rank: "mari",
    name: "pépé",
    status: "marié",
    children: [{
      name: "gamin"
    }]
  },
  {
    rank: "mari",
    name: "papi",
    status: "séparé"
  }
]
</script>

<Head title="famille" />
{#each family as {rank, name, status, children}}
<Card width="25" title={name} />


{/each}
