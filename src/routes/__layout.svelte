<script lang="ts">
import {
  onMount
} from "svelte"
import Tape from "$lib/components/Tape.svelte"
import Navbar from '$lib/components/header/Navbar.svelte';

import Footer from "$lib/components/Footer.svelte"
import Secret from "$lib/components/Secret.svelte"

import {
  secretReleased
} from "$lib/store/secret.js"
import '../app.scss';
let hour

let themeColor

const tapeMsg = [
  "Ceci est un test de défilement horizontal; ne vous inquiétez pas, tout va bien.",
  "Si vous avez des commentaires ou suggestions à nous soumettre, veuillez remplir le formulaire adéquat.",
  "J'ai un serpent dans ma botte!",
  "Ce que j'ai à vous dire est <strong>très</strong> important. Veuiller prêter l'oreille avec la plus <big>grande</big> <mark>attention</mark>.",
  "Bien entendu, rien ne presse, libre à vous <big>😃</big>",
  "J'ai un costume <s>rayé</s>. Qui suis-je? <big><strong>Scarface</strong> 😱</big>"
]

const newMsg = tapeMsg[Math.floor(Math.random() * tapeMsg.length)]
let msg2display = newMsg
$secretReleased = false

function toggleSecretCMP() {
  $secretReleased = !$secretReleased
}

$: console.log(msg2display)

onMount(() => {
  hour = new Date().getHours()

  themeColor = hour >= 6 && hour < 22 ? 'light' : 'dark'

  const msgInterval = setInterval(()=> {msg2display = newMsg }, 60000)
  return msg2display
  clearInterval(msgInterval)

})
</script>
<svelte:window on:dblclick|once|preventDefault={toggleSecretCMP} />

<div class="{themeColor}-theme">
    <Navbar />


    <main>
        {#if $secretReleased}


        <Secret />
        {:else}

        <slot />
        {/if}
    </main>

    <Footer />
</div>

<style>
main {
  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 1rem;
  width: 100%;

  margin: 0 auto 3em;
  box-sizing: border-box;
  word-wrap: break-word;
}

@media (min-width: 480px) {}
</style>
