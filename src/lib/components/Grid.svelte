<div class="grid">
  <slot></slot>
</div>
<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.5em;
  }
</style>