<script>
  import {createEventDispatcher} from "svelte"
  const dispatch = createEventDispatcher()
export let background = "olive"
export let color = "whitesmoke"
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
  if (background == bg) color = "black"

}
</script>

<button on:click={()=> dispatch("click")} style="background:{background}; color: {color}"><slot /></button>

<style>
button {
  font-weight: 600;
  background: teal;
  color: whitesmoke;
  padding: 1em 0;
  margin: 0;
  width: 100%;

  border-radius: 8px;
  border: 0;
  text-transform: uppercase;
  font-size: 1em;
}
</style>
