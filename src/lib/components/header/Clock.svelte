<script>
import {
  onMount
} from 'svelte'

let time = new Date()
const formatter = Intl.DateTimeFormat("french", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
})

onMount(() => {
  const interval = setInterval(() => time = new Date(), 1000)
  return interval
  clearInterval(interval)
}, )
</script>

<div>
    {formatter.format(time)}
</div>

<style>
div {
  position: relative;
  padding: 0;
  margin: 0 12px 0 0;
  height: 3em;
  display: flex;

  justify-content: end;
  align-items: center;
  list-style: none;

  background-size: contain;

}
</style>
