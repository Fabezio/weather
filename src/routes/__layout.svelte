<script lang="ts">
  import {Styles, Container} from "sveltestrap"
  import 'bootstrap-scss/bootstrap.scss';
  import 'bootstrap-icons/font/bootstrap-icons.css';
  import {theme} from "$lib/store/theme"
  import {page} from "$app/stores"
  import Breakpoints from "$lib/components/UI/Breakpoints.svelte"
  import Nav from '$lib/components/header/Nav.svelte';
  import Footer from "$lib/components/UI/Footer.svelte"
  $theme = {txt: "dark", bg: "light", linkColor: "danger"}
  // $theme.txt="dark"
  // $theme.bg="light"
  // $theme.linkColor="danger"
// $: console.log($page.url.pathname)
$: innerWidth = 0
$: innerHeight = 0
// $: outerHeight = 0
$: console.log(innerWidth, innerHeight)
</script>

<Breakpoints />
<Styles />
<!-- <Nav /> -->
<!-- <Container> -->
  <div class="layout">

    
    <main >
      <slot />
      
    </main>
    
    <!-- </Container> -->
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
