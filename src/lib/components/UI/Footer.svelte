<script>


  // import {Nav} from "sveltestrap"
  import {theme} from "$lib/store/theme"
  const gitUrl = "github.com"
  const author = "Fabezio";
  const repository = "weather";
  // const  ghUrl = "https://github.com/Fabezio/sveltekit_basic_template"
  // const {bg, txt} = $theme
  console.log ($theme)
</script>

<footer class=" py-3 bg-{$theme.bg} text-{$theme.txt}">
  <!-- <Nav> -->

    <div class="row text-center">
      
      <div class="col">
        <a href="https://{gitUrl}/{author}/{repository}" class="text-{$theme.linkColor}" target="_blank"
          >code source
        </a>
      </div>
      <!-- <div>Développé avec <a href="https://svelte.dev" target="_blank" ></a></div> -->
      <div class="col">
        Développé avec <a href="https://svelte.dev" class="text-{$theme.linkColor}" target="_blank">svelte </a>
      </div>
      
    </div>
  <!-- </Nav> -->
</footer>

<style lang="scss">
  // footer {
  //   perspective: 100;
  //   position: fixed;
  //   bottom: 0;
  //   width: 100%;

  //   display: flex;
  //   flex-direction: row;
  //   justify-content: space-evenly;
  //   align-items: center;
  //   height: 3em;
  //   border-top: 1px solid deepbluesky;
    a {
      font-weight: bold;
      color: lime;
    }
  // }

  // @media (min-width: 480px) {
  //   footer {
  //     height: 3em;
  //   }
  // }
</style>
