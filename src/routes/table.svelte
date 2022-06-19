<script>
  import SvelTable from 'sveltable/SvelTable.svelte';
  let data = [
    {firstname: "John", lastname: "Doe", age: "30"},
    {firstname: "Jane", lastname: "Doe", age: "25"},
    // {firstname: "John", lastname: "Doe", age: "30"},
  ]
</script>
<div>sveltable</div>
<SvelTable dataSet={data} />