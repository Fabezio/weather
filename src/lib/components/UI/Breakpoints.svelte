<script>
  import {bk, breakPoints} from "$lib/store/breakpoints"
$: innerWidth = 0
$: innerHeight = 0
<<<<<<< HEAD
// $: if (innerWidth == 0) $bk = "undefined"
$: if (innerWidth > 0) {
  $bk="xs"

=======
$: if (innerWidth == 0) $bk = "undefined"
$bk="xs"
$: {
>>>>>>> 15e8d16 (détail affichage courant: flex)
  if (innerWidth >= 1400) $bk="xxl"
  else if (innerWidth >= 1200) $bk="xl"
  else if (innerWidth >= 992) $bk="lg"
  else if (innerWidth >= 768) $bk="md"
  else if (innerWidth >= 576) $bk="sm"

<<<<<<< HEAD
  console.log("largeur:",innerWidth)
  console.log("hauteur:", innerHeight)
  console.log("breakpoint:", $bk)
  // $: if (innerHeight > 0) console.log(innerHeight)
=======
>>>>>>> 15e8d16 (détail affichage courant: flex)
}
// $breakPoints = [ 
//   {sm: {
//     Component: "Grid", blocks: 3
//   }}
// ]
// $: console.log(innerWidth, innerHeight)
</script>

<svelte:window bind:innerHeight bind:innerWidth />
