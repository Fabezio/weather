<script>
  import Head from "$lib/components/Head.svelte"
  const ce = "chef d'équipe"
  const ag1 = "Agent"
  const ag2 = "Agent 2"
</script>
<div class="banner">
  <Head title="Journal de Sécurité" />
  <div class="fields">
    <div id="left">
      <h2>effectif</h2>
      <div class="workers first">
        <div><strong>poste</strong></div><div>Nom</div><div>Début</div><div>Fin</div>
        </div>
      <div class="workers">
        
        <!-- <div class="break" /> -->
        <div><strong>chef d'équipe:</strong></div><div> {ce}</div><div>19H00</div><div>07H00</div>
        <div><strong>agent 1:</strong></div><div> {ag1}</div><div>19H00</div><div>07H00</div>
        <div><strong>agent 2:</strong></div><div> {ag2}</div><div>19H00</div><div>07H00</div>
        
      </div>

    </div>
    <div>
      <h2>champ 2</h2>

    </div>
    <!-- <p>champ 1</div> -->

  </div>

</div>
<style lang="scss">
  .banner {
    width: 100%;
    min-height: 150px;
    background: #ABF7FE;
    padding-bottom: 1em; margin: 0;
    .fields {
      background: inherit;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      text-align: center; 
      * {
        // width:  75%;

        color: #444;
  
      }
      .first {
        line-height: 1.5em;
        margin-bottom: 8px;
        border-bottom: 1px solid rgba(0,0,0,.2);

      }
      .workers {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        * {
          text-align: left;

        }
        .break {
          grid-row: span 1 / -1;
        }
      }
      div {
        margin: auto;
        text-align: left;
      }

    }
  }

</style>