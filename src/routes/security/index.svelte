<script>
  import Clock from "$lib/components/header/Clock.svelte"
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
        <Button background="#ABF6FC" color="black" width="small" size="100%" >bouton</Button>

      </div>
    </div>
    <!-- <p>champ 1</div> -->
  </div>
</div>
<Button>prise de service</Button>

<style lang="scss" >
.banner {
  width: 100%;
  min-height: 150px;
  background: #ABF7FE;
  padding-bottom: 1em; margin: 0;
  #first-line {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: start;
    // * {

    // }
    .logo {
      align-self: center;

    }
    :first-child {
      justify-self: start;
    }
    :nth-last-child(1) {
      justify-self: end;
    }

  }
  .big {
    font-size: 2em;
  }
  .float-right {
    float: right;
  }
  .fields {    
    background: inherit;
    display: grid;
    grid-template-columns: 2fr repeat(2, 1fr) 1fr;
    grid-gap: 1em;
    text-align: center; 
    align-items: start;
    * {
      // width:  75%;
      color: #444;
    }

    // #left {
    // }

    .first {
      font-weight: 600;
      line-height: 1.5em;
      margin-bottom: 8px;
      border-bottom: 1px solid rgba(0,0,0,.2);
    }
    .title {
      font-size: 1.75em;
      font-variant: small-caps;
      text-align: center;
    }
      .break {
        grid-row: span 1 / -1;
      }
    // }
    div {
      margin: auto;
      text-align: left;
    }

    #center {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1em;
      align-self: start;
      div {
        h2 {
          font-size: 1.5em;
          text-transform: lowercase;
          font-variant: small-caps;
          font-weight: 500;
          text-align: center;
        }
        p, ul {
          text-align: justify;
        }
    
      }
    }
    #right {
      align-self: start;
      width: 100%;
      * {
        text-align: center;

      }
    }
  }
}
p, li {
  word-wrap: break-word;
  
}
.date {
  text-align: center;

}

</style>