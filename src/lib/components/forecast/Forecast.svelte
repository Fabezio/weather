<script>
  import * as Details from "./details"
  import {Row, Col } from "sveltestrap"
  import Flex from '$lib/components/UI/Flex.svelte';

export let fc

let selected = false
let dataToDisplay = {}
let maxElements = 2

$: innerWidth = 0
$: console.log(innerWidth)
$: if (innerWidth >= 576) maxElements = 3
$: if (innerWidth >= 768) maxElements = 4
$: if (innerWidth >= 992) maxElements = 6
$: if (innerWidth >= 1200) maxElements = 7
$: if (innerWidth >= 1400) maxElements = 8



function swapData(index) {
  selected = !selected
  if (selected) {
    dataToDisplay = fc.days[index]
  } else {
    dataToDisplay = fc.now
  }

  return dataToDisplay

  
}
</script>

<svelte:window bind:innerWidth />

<slot />
<div class="card-body">

  {#if selected}
  <Details.Current dataSet={dataToDisplay} />
  {:else}
  <Details.Current dataSet={fc.now} />
  {/if}
</div>
<div class="card-footer text-center">
  <Flex wrap >
    <!-- <div class="mx-auto"></div> -->
    {#each fc.days as day, i}
    <!-- <Col xs="auto" > -->
      {#if i < maxElements}
      <Details.Daily on:select="{()=>swapData(i)}" {day} />
        {/if}
    <!-- </Col> -->
    {/each}
  </Flex>
</div>
