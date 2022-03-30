<script>
let secretReleased = true

function toggleSecretCMP() {
  secretReleased = !secretReleased
  return {
    headers: {
      Location: "/",
    },
    status: 302
  }
}
</script>

<h2>Je vais vous révéler mon secret</h2>
<button on:click={toggleSecretCMP}>
    fermer
</button>
