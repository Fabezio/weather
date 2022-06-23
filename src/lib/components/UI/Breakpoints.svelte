<script>
  import {bk, breakPoints} from "$lib/store/breakpoints"
$: innerWidth = 0
$: innerHeight = 0
$bk="xs"
$: {
  if (innerWidth >= 1400) $bk="xxl"
  else if (innerWidth >= 1200) $bk="xl"
  else if (innerWidth >= 992) $bk="lg"
  else if (innerWidth >= 768) $bk="md"
  else if (innerWidth >= 576) $bk="sm"
}
// $breakPoints = [ 
//   {sm: {
//     Component: "Grid", blocks: 3
//   }}
// ]
// $: console.log(innerWidth, innerHeight)
$: console.log("largeur:",innerWidth)
$: console.log("hauteur:", innerHeight)
$: console.log("breakpoint", $bk)
// $: console.log()
</script>

<svelte:window bind:innerHeight={innerHeight} bind:innerWidth={innerWidth} />
