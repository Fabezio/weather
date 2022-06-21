<script>
  import * as Links from "./links";
// import Link from "./Link.svelte"
// import MenuDropdown from "./links/MenuDropdown.svelte";
export let links
</script>
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
  {#each links as {url, label, icon}}

    <Links.Link {url} {label} {icon} />
    {/each}
        
        <!-- <Links.MenuDropdown /> -->
       
        <!-- <Links.Link disabled url="#" label="Disabled" /> -->
        <!-- <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> -->
      </ul>

