<script>
  const author = "Fabezio"
  const project = "sveltekit_basic_template"
</script>
<footer>
  <div>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</div>
  <div><a href="https://github.com/{author}/{project}" target="_blank" >code source </a></div>
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
		height: 3em;
		/* padding: 20px; */
		background: var(--bar-bg);
		color: whitesmoke;
	}

	footer a {
		font-weight: bold;
	}

  @media (min-width: 480px) {
		footer {
			height: 3em;
			/* padding: 20px 0; */
		}
	}

</style>