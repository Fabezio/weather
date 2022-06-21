<script >
// import {
//   page
// } from '$app/stores';
import * as Navbar from './navbar'
// import Navlinks from "./Navlinks.svelte"
import Clock from "../Clock.svelte"
// import Toggler from "./Toggler.svelte"
// import Form from "./Form.svelte"
let showLinks = false
const links = [{
    url: "",
    label: "Accueil",
    icon: "house"

  }, {
    url: "help",
    label: "Aide",
    icon: "question"
  }, {
    url: "weather",
    label: "Météo",
    icon: "thermometer"
  }, {
    url: "news",
    label: "Actu",
    icon: "newspaper"
  }, {
    url: "blog",
    label: "Blog",
    icon: "wordpress"
  }, {
    url: "security",
    label: "Sécurité",
    icon: "shield-shaded"
  },
]
function toggleNavDisplay() {
  showLinks = !showLinks
}
// $: console.log($page.url.pathname)
$: innerWidth= 0
</script>

<svelte:head>
  <script src="https://kit.fontawesome.com/347214cdeb.js" crossorigin="anonymous"></script>
</svelte:head>
<!-- <svelte:window bind:innerWidth></svelte:window> -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Navbar.Brand />

    <Navbar.Toggler on:toggle={toggleNavDisplay} />
    
    <div class:collapse={showLinks=false} class=" navbar-collapse" id="navbarSupportedContent">
      <!-- {#if showLinks && innerWidth} -->
      <Navbar.Navlinks links={links} />
      <!-- {/if} -->
      
    </div>
    <!-- <div>
      <Navbar.Form />

    </div> -->
    <div class="text-light">
      <Clock />

    </div>
  </div>
</nav>
