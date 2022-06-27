<script>
  import * as Details from "./details"
  import {Row, Col } from "sveltestrap"
  import Flex from '$lib/components/UI/Flex.svelte';

export let fc

let selected = false
let dataToDisplay = {}


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

<slot />
<div class="card-body">

  {#if selected}
  <Details.Current dataSet={dataToDisplay} />
  {:else}
  <Details.Current dataSet={fc.now} />
  {/if}
</div>
<div class="card-footer text-center">
  <Flex >
    <!-- <div class="mx-auto"></div> -->
    {#each fc.days as day, i}
    <!-- <Col xs="auto" > -->
      <Details.Daily on:select="{()=>swapData(i)}" {day} />
    <!-- </Col> -->
    {/each}
  </Flex>
</div>
