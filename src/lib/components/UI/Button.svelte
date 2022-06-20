<script>
  import {createEventDispatcher} from "svelte"
  const dispatch = createEventDispatcher()
export let background = "teal"
export let color = "whitesmoke"
export let gap = "16"
export let width
export let block
// export let mode
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
  "silver"
]

// export let size = "100%"
$: for (let bg of backgrounds) {
  if (background == bg) color = "black"

}
</script>

<button on:click={()=> dispatch("click")} style="background:{background}; color: {color}; padding:{gap}px; width: {block? "100%": width} ; border-radius: {(parseInt(gap) / 2).toString()}px;"><slot /></button>
<!-- 
<style>
button {
  font-weight: 600;
  /* background: teal; */
  color: whitesmoke;
  /* padding: 1em 1em; */
  margin: 0;
  /* width: 100%; */

  /* border-radius: 8px; */
  border: 0;
  text-transform: uppercase;
  font-size: 1em;
}
</style> -->
