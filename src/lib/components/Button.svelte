<script>
  export let background = "olive"
  let color = "whitesmoke"
  const backgrounds = [
    "cyan",
    "whitesmoke",
    "white",
    "lime",
    "magenta",
    "pink",
    "yellow", 
    "gold",
    "silver",
    "deepskyblue",
    "skyblue",
  ]
  $: for (let bg of backgrounds) {
    if(background== bg) color="black"

  }
</script>

<button style="background:{background}; color: {color}"><slot /></button>

<style>
  button {
    background: teal;
    color: whitesmoke;
    padding: 1em 0;
    margin: 0;
    width: 100%;
    /* display: block; */
    border-radius: 7px;
    border: 0;
    text-transform: uppercase;
    font-size: 1em;
  }
</style>