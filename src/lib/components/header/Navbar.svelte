<script lang="ts">
	import { page } from '$app/stores';
	import Brand from '$lib/components/header/Brand.svelte'
	import Navlinks from "./Navlinks.svelte"
	import Clock from "./Clock.svelte"
	const links = [
		{url: "", label: "Accueil"},
		{url: "collection", label: "Database"},
		// {url: "family", label: "Famille"},
		{url: "help", label: "Aide"},
		{url: "weather", label: "Météo"},
		{url: "news", label: "Actu"},
	]
	$: console.log($page.url.pathname)
</script>



	<nav>
		<Brand />
		<Navlinks {links} />
		
		<Clock />
	
	</nav>


<style>


	nav {
		position: fixed; 
		top: 0;
		display: flex;
		height: 3em;
		width: 100%;
		justify-content: space-between;
		/* background: var(--bar-bg); */
		/* --background: rgba(255, 255, 255, 0.7); */
	}

	
	
</style>
