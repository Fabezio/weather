<script>
  export let temp
  export let main
  export let icon

</script>
<article class="current-forecast">
  <div class="frame">
     <img src={icon} alt="logo">

   </div>
   <div>

     <h4>Temps: {main}</h4>
     <h4>Températures (en °C)</h4>
     <div><span class="list-start">Termpérature globale:</span> <span class="list-end">{temp}</span></div>
     
      </div>
       
</article>
<!-- 
<style>
       .current-forecast {
    display: grid;
    grid-template-columns: 1fr 2fr;
    color: var(--light-txt);
    
  }

.frame {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
}
 div, div * {
    color: var(--light-txt);
    
  }
  div span {
    color: var(--light-txt);

  }
     </style> -->