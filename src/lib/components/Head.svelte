<script>
  let webTitle = "web title"
  export let title = ""
</script>

<svelte:head>
  <title>{webTitle} | {title}</title>
</svelte:head>
<h1>{title}</h1>