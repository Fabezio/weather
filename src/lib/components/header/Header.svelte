<script lang="ts">
	import { page } from '$app/stores';
	import Brand from '$lib/components/header/Brand.svelte'
	const links = [
		{url: "", label: "Accueil"},
		{url: "collection", label: "Database"},
		{url: "help", label: "Aide"},
	]
</script>



	<nav>
		<Brand />
		
		<ul>
			{#each links as {url, label}}
			<li class:active={$page.url.pathname === '/'+url}><a sveltekit:prefetch href="/{url}">{label}</a></li>
				
			{/each}
			
		</ul>
	
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

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--light-txt);
		font-weight: 100;
		font-size: 0.95rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
