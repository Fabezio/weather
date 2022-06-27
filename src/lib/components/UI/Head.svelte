<script>
let webTitle = "Weather Demo"
export let title = ""
</script>

<svelte:head>
  <title>{webTitle} | {title}</title>
</svelte:head>
<h1 class="text-center my-4">{title.toUpperCase()}</h1>
