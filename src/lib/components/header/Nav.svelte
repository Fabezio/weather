<script >
  // import {bk} from "$lib/store/breakpoints"
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'sveltestrap';
  let isOpen = false;
  import {theme} from "$lib/store/theme"

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
  import {
  page
} from '$app/stores';
import {links} from "./links"
// import Clock from "../Clock.svelte"
$: console.log($theme)
</script>

<svelte:head>
  <script src="https://kit.fontawesome.com/347214cdeb.js" crossorigin="anonymous"></script>
</svelte:head>

  

<Navbar color="dark" dark expand="md">
  <NavbarBrand href="/">Basic Template</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ms-auto" navbar>
      {#each links as {url, label, icon}}
      <NavItem>
        <NavLink active={$page.url.pathname == `/${url}`} href="/{url}"><i class="bi-{icon} mr-2" />{label}</NavLink>
      </NavItem>
        
      {/each}
     
      <!-- <Dropdown nav inNavbar>
        <DropdownToggle nav caret>Options</DropdownToggle>
        <DropdownMenu end>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </Dropdown> -->
      <NavItem>

      </NavItem>
    </Nav>
  </Collapse>
  <!-- <Clock /> -->
</Navbar>
<!-- </div> -->