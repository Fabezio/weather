<script>
import {
  secretReleased
} from "$lib/store/secret.js"

function toggleSecretCMP() {
  $secretReleased = !$secretReleased
}
</script>

<h2>Je vais vous révéler mon secret</h2>
<button on:click={toggleSecretCMP}>
    fermer
</button>
