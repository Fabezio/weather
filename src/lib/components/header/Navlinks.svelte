<script>

import Link from "./Link.svelte"
  export let links

</script>
<ul>
			<!-- {#each links as link} -->
			{#each links as {url, label}}
			<!-- <li class:active={$page.url.pathname === '/'+url}><a sveltekit:prefetch href="/{url}">{label}</a></li> -->
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
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

    </style>
