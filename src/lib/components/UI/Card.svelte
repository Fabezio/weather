<script>
export let width = "14em"
export let title = "title"
export let hasFooter =false
</script>
<div class="card" style="width: {width}">
    <div class="card-head">
        <h3 class="card-title">{title}</h3>
    </div>
    <div class="card-body">
        <p class="card-content"><slot name="content"/></p>
    </div>
    {#if hasFooter}
    <div class="card-footer">
        <h4><slot name="footer"/></h4>
    </div>
    {/if}
</div>

<style>
.card {
  border: 2px solid gray;
  border-radius: 8px;
  box-shadow: 8px 8px rgba(0,0,0, .2);

}

.card-title {
  text-transform: uppercase;
  text-align: center;

}

.card-body {
  min-height: 5em;
  color: inherit;
}

.card-content {
  font-size: 1.1em;
  padding: 0 0.5em;
  text-align: justify;

}
.card-body {

  border-top: 2px solid gray;
}

.card-head,
.card-body {
  padding: 0 1em;
}

.card-footer {
  border-top: 2px solid gray;
  padding: 0 1em;
  text-align: center;

}
</style>
