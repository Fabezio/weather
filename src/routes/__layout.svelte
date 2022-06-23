<script lang="ts">
  import {Styles, Container} from "sveltestrap"
  import 'bootstrap-scss/bootstrap.scss';
  import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  onMount
} from "svelte"

import Breakpoints from "$lib/components/UI/Breakpoints.svelte"
// import Container from "$lib/components/UI/Container.svelte";
// import {newCoords} from "$lib/store/geo"
import {theme} from "$lib/store/theme"
import {page} from "$app/stores"
// import {page} from "$app/stores"

import Nav from '$lib/components/header/Nav.svelte';

import Tape from "$lib/components/UI/Tape.svelte"
import Footer from "$lib/components/UI/Footer.svelte"
// let loading = true

// import '../app.css';
// $newCoords = [];
// let hour

$: $theme = {bg: "dark", txt: "light", linkColor: "warning"}

$: console.log($page.url.pathname)
$: innerWidth = 0
$: innerHeight = 0
$: console.log(innerWidth, innerHeight)
</script>

<Breakpoints />
<Styles />

    {#if $page.url.pathname != "/security"}
    <Nav />
    <!-- <Tape/> -->
    
    
    {#if $page.url.pathname != "/weather"}
    <Container>
      <slot />

        </Container>
        {:else}
        <div>
          <slot />
  
        </div>
        {/if}
        
        <Footer />
        {:else} 

        <slot/>

      {/if}
