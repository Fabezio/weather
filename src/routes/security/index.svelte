<script>
  import Clock from "$lib/components/Clock.svelte";
  import Head from "$lib/components/UI/Head.svelte"
  import Button from "$lib/components/UI/Button.svelte"
  
  import HandleEntry from "./HandleEntry.svelte"
  import Worker from "./Worker.svelte"
  let input = ""
  // let ce = ""
  // let ag1 = ""
  // let ag2 = ""
  // function getEntry (val) {
  //   (e)=>{if (e.key=="Enter" || e.key == "Tab") {
  //     e.preventDefault()
  //     val = input
  //   }
  // }
  // // input = ""
  // return val
  // }
  const date = new Date()
  const formatter = Intl.DateTimeFormat("fr", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  })
</script>

<div class="banner">
  <div id="first-line">
    <div  class="big logo">logo</div>
    <Head title="Journal de Sécurité" />
    <div class="big">
      <Clock />
    </div>
    
  </div>
  <div class="date big">aujourd'hui: {formatter.format(date)}</div>
  <!-- <HandleEntry /> -->
  <div class="fields">
    <div id="left">
      <h2 class="title">effectif</h2>
      <div class="first">
        <Worker role="POSTE" name="NOM" start="DEBUT" end="FIN" />
      </div>
        <Worker role="SSIAP 2" name="RIQUET" start="19H00" end="07H00" />
        <Worker role="SSIAP 1" name="SOUARIT" start="19H00" end="07H00" />
        <Worker role="SSIAP 1" name="MOCKA" start="19H00" end="07H00" />
    </div>
    <div id="center">
      <div>
        <h2>Consignes</h2>
        <p>voir les événements précédents et les courriels</p>
        
      </div>
    </div>
    <div id="center">
      <div>
        <h2>Anomalies</h2>
        <ul>
          <li>ascenseur 5 à l'arrêt</li>
          <li>ssi: zone ZA02 en essai</li>
        </ul>

      </div>
    </div>
    <div id="right">
      <div>
        <h2 >
          actions

        </h2>
        <Button background="#ABF6FC" color="black" width="small" block>bouton</Button>

      </div>
    </div>
    <!-- <p>champ 1</div> -->
  </div>
</div>
<Button >prise de service</Button>
