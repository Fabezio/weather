<script lang="ts">
  import {Styles} from "sveltestrap"
  import Container from "$lib/components/UI/Container.svelte";
  import 'bootstrap-scss/bootstrap.scss';
  import 'bootstrap-icons/font/bootstrap-icons.css';
  import {theme} from "$lib/store/theme"
  import {page} from "$app/stores"
  import Breakpoints from "$lib/components/UI/Breakpoints.svelte"
  import Nav from '$lib/components/header/Nav.svelte';
  import Footer from "$lib/components/UI/Footer.svelte"
  $theme = {txt: "dark", bg: "light", linkColor: "danger"}
  
$: innerWidth = 0
$: innerHeight = 0
// $: outerHeight = 0
$: console.log(innerWidth, innerHeight)
</script>

<Breakpoints />
<Styles />
<!-- <Nav /> -->

<div class="layout">
    <Container >
      <slot />
    </Container>

    <Footer />
</div>

<style>
  .layout {
    min-height: 100vh ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
