<script>
  const author = "Fabezio"
  const project = "sveltekit_basic_template"
</script>
<footer>
  <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
  <p><a href="https://github.com/{author}/{project}" target="_blank" >code source </a></p>
</footer>

<style>
  
	footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		padding: 16px;
	}

	footer a {
		font-weight: bold;
	}

  @media (min-width: 480px) {
		footer {
			padding: 16px 0;
		}
	}

</style>