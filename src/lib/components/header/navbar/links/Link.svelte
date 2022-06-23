<script>
  import {bk} from "$lib/store/breakpoints";
import {
  page
} from '$app/stores';
export let url ="#"
export let label = "disabled"
export let icon="link"
export let disabled = false
// let textAlign = "left"

// $: if ($bk== "xs" || $bk="sm") {

// }

</script>
{#if !disabled}
<li class="nav-item text-uppercase mx-auto" class:active={$page.url.pathname === '/'+url}>
          <a class="nav-link" aria-current="page" sveltekit:prefetch href="/{url}" ><i class="bi-{icon} mr-2"></i>{label}</a>
        </li>
<!-- <li class:active={$page.url.pathname === '/'+url} class:disabled={disabled} class="nav-item"><a class="dropdown-item" sveltekit:prefetch href="/{url}" >{label}</a></li> -->
{:else}
<li class="nav-item">
          <a class="nav-link disabled" href={url} tabindex="-1" aria-disabled="true">{label}</a>
        </li>
        {/if}
<!-- 
<style lang="scss" >
li {
  position: relative;
  height: 100%;
  &.active::before {
    $accent-color: red;
    $size: 6px;
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - $size);
    border: $size solid transparent;
    border-top: $size solid $accent-color;
  }
}


a {
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1em;

  font-weight: 100;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: color 0.2s linear;
  
  &:hover {
    color: var(--accent-color);
  }
}

</style> -->
