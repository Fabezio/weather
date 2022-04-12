<script>
  export let role
  export let name
  export let start
  export let end
</script>
<div class="worker">
  <div>{role}</div><div class:workerName={name != "NOM"}>{name}</div><div>{start}</div><div>{end}</div>

</div>
<style>
  .worker {
    display: grid;
    grid-template-columns: 2fr 4fr 2fr 2fr;
    grid-column-gap: 1em;
  }
  div {
    text-align: center;
  }
  .workerName {
    /* width: 75%; */
    justify-content: start;
    text-align: left;
    /* padding: 0 1em;  */
  }
</style>