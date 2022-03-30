<script>
import {
  page
} from '$app/stores';
export let url
export let label

</script>

<li class:active={$page.url.pathname === '/'+url}><a sveltekit:prefetch href="/{url}">{label}</a></li>

<style lang="scss" >
li {
  position: relative;
  height: 100%;
  &.active::before {
    --size: 6px;
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--accent-color);
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

</style>
