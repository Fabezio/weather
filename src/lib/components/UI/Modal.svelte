<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher()
</script>

<div id="modal-container"></div>
<div id="modal-box">
  <button on:click={()=> dispatch("close")} id="close">&times;</button>
  <div id="modal-body">

    <slot/>
  </div>
  <hr>

      <slot name="footer" />



</div>

<style lang="scss">
#modal-container {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  background: #333;
  width: 100%;
  min-height: 100vh;
}
#modal-box {
  position: absolute;
  left: 25%;
  top: 25%;

  background: white;
  color: #333;
  height: 50%;
  width: 50%;

  border-radius: 1em;
  
  #close {
    float: right;
    margin: 2px;
    z-index: 1;
    border: none;
    color: #333;
    font-size: 2em;
    position: relative;
    border-radius: inherit;
  }
  #modal-body {
    padding: 1em;
  }

}

</style>