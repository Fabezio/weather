<script>
  import fairy from "./jours-feriés.json"
  const dates = JSON.stringify(fairy).split(",")
  dates.map(date=> {
    const newDate = date.split(":")
  })
  console.log(dates)

</script>
{#each dates as date} 
<div>{date}</div>
{/each}
