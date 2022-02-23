<script lang="ts">
	import { page } from '$app/stores';
	import Brand from '$lib/components/header/Brand.svelte'
	import Navlinks from "./Navlinks.svelte"
	const links = [
		{url: "", label: "Accueil"},
		{url: "collection", label: "Database"},
		{url: "family", label: "Famille"},
		{url: "help", label: "Aide"},
	]
	$: console.log($page.url)
</script>



	<nav>
		<Brand />
		<Navlinks {links} />
		<!-- <ul>
			{#each links as {url, label}}
			<li class:active={$page.url.pathname === '/'+url}><a sveltekit:prefetch href="/{url}">{label}</a></li>
				
			{/each}
			
		</ul> -->
	
	</nav>


<style>


	nav {
		display: flex;
		height: 3em;
		width: 100%;
		justify-content: space-between;
		background: var(--bar-bg);
		/* --background: rgba(255, 255, 255, 0.7); */
	}

	
	
</style>
