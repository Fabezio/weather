<script>
	import {secretReleased } from "$lib/store/secret.js"
	// import toggleSecretCMP from "$lib/middlewares/toggleSecret.js"
function toggleSecretCMP() {
  $secretReleased = !$secretReleased
}
	// function toggleSecretCMP() {
	// 	$secretReleased = !$secretReleased
  // }
  // console.log($secretReleased)
  </script>

<h2>Je vais vous révéler mon secret</h2>
		<button on:click={toggleSecretCMP}>
			fermer
		</button>