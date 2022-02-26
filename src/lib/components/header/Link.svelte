<script>
  import { page } from '$app/stores';
  export let url
  export let label
  // const {url, label} = link

</script>

<li class:active={$page.url.pathname === '/'+url}><a sveltekit:prefetch href="/{url}">{label}</a></li>

<style>

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

a {
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