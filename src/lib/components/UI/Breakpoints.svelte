<script>
  import {bk, breakPoints} from "$lib/store/breakpoints"
$: innerWidth = 0
$: innerHeight = 0
// $: if (innerWidth == 0) $bk = "undefined"
$: if (innerWidth > 0) {
  $bk="xs"
  
  if (innerWidth >= 1400) $bk="xxl"
  else if (innerWidth >= 1200) $bk="xl"
  else if (innerWidth >= 992) $bk="lg"
  else if (innerWidth >= 768) $bk="md"
  else if (innerWidth >= 576) $bk="sm"

  console.log("largeur:",innerWidth)
  console.log("hauteur:", innerHeight)
  console.log("breakpoint:", $bk)
  // $: if (innerHeight > 0) console.log(innerHeight)
  
}
// $breakPoints = [ 
//   {sm: {
//     Component: "Grid", blocks: 3
//   }}
// ]
// $: console.log(innerWidth, innerHeight)
</script>

<svelte:window bind:innerHeight bind:innerWidth />
