<script lang="ts">
	import Navbar from '$lib/components/header/Navbar.svelte';
	import {page} from "$app/stores"
	import Footer from "$lib/components/Footer.svelte"
	import Secret from "$lib/components/Secret.svelte"
	// import toggleSecretCMP from "$lib/middlewares/toggleSecret"
	import {secretReleased } from "$lib/store/secret.js"
	import '../app.css';
	
	$secretReleased = false
	function toggleSecretCMP() {
  $secretReleased = !$secretReleased
}

	// let secretReleased = false
	// function toggleSecretCMP() {
	// 	$secretReleased = !$secretReleased
	// 	// $page.url.searchParams.append()
	// 	// $page.url.href = "http://localhost:3000/secret"
	// 	// return {
	// 	// 	status: 302,
	// 	// 	url: {pathname: "/secret"}

	// 	// }
		
	// }
	// console.log($secretReleased)
</script>

<Navbar />
<svelte:window on:dblclick|once|preventDefault={toggleSecretCMP} />

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

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		/* justify-content: space-between; */
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}


	@media (min-width: 480px) {
		
	}
</style>
