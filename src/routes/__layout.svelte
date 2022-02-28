<script lang="ts">
	import {onMount} from "svelte"
	import Navbar from '$lib/components/header/Navbar.svelte';
	// import {page} from "$app/stores"
	import Footer from "$lib/components/Footer.svelte"
	import Secret from "$lib/components/Secret.svelte"
	// import toggleSecretCMP from "$lib/middlewares/toggleSecret"
	import {secretReleased } from "$lib/store/secret.js"
	import '../app.css';
	let hour
	// let theme
	onMount(()=> {
		hour = new Date().getHours()
		// theme = "dark"
		// if(hour >=6 || hour < 22) theme="light"

	})
	$secretReleased = false
	function toggleSecretCMP() {
		$secretReleased = !$secretReleased
	}
	$: console.log (hour)
	// $: console.log (theme)

</script>
<svelte:window on:dblclick|once|preventDefault={toggleSecretCMP} />
<div class="{hour >= 6 && hour < 22 ? 'light' : 'dark'}-theme">
<Navbar />

<main>
	{#if $secretReleased}
		 <!-- content here -->
		 
<Secret />
	{:else}
		 <!-- else content here -->
		 <slot />
	{/if}
</main>

<Footer />
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		/* justify-content: space-between; */
		padding: 1rem;
		width: 100%;
		/* max-width: 1024px; */
		margin: 3em auto;
		box-sizing: border-box;
		word-wrap: break-word;
	}


	@media (min-width: 480px) {
		
	}
</style>
