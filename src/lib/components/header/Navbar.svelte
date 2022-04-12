<script lang="ts">
import {
  page
} from '$app/stores';
import Brand from '$lib/components/header/Brand.svelte'
import Navlinks from "./Navlinks.svelte"
import Clock from "./Clock.svelte"
let showLinks = false
const links = [{
    url: "",
    label: "Accueil"
  },

  {
    url: "help",
    label: "Aide"
  },
  {
    url: "weather",
    label: "Météo"
  },
  {
    url: "news",
    label: "Actu"
  },
  {
    url: "blog",
    label: "Blog"
  },
  {
    url: "security",
    label: "Sécurité"
  },
]
function toggleNavDisplay() {
  showLinks = !showLinks
}
$: console.log($page.url.pathname)
$: innerWidth= 0
</script>

<svelte:head>
  <script src="https://kit.fontawesome.com/347214cdeb.js" crossorigin="anonymous"></script>
</svelte:head>
<svelte:window bind:innerWidth></svelte:window>
<nav>
    <Brand />

    <div class="collapse">
      <button on:click={toggleNavDisplay}>
        <i class="fas fa-bars fa-fw fa-lg"></i>
      </button>

    </div>

    {#if showLinks || innerWidth > 1024}
      
    <Navlinks {links} />

    <Clock />
    {/if}

</nav>

<style>
  nav {
  position: sticky;
  top: 0;
  display: grid;
    grid-auto-rows: auto;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr auto 1fr;
  justify-items: space-between;
  height: 3em;
  width: 100%;
  border-bottom: 1px solid deepbluesky;
  z-index: 0;
  flex-wrap: wrap;
}


.collapse {
  height: 3em;
  width: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  justify-self: end;

  display: visible;
}
button {
  border-width: 0;
  background: transparent;

}

  @media screen and (min-width: 1024px) {
    nav {
      grid-template-columns: repeat(3, 1fr);
    }
    .collapse {
      display: none;
    }
  }

</style>
