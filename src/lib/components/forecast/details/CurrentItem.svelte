<script>
  export let color = "light"
  export let icon

</script>

<div class="text-light fs-5 px-3"><i class="mr-3 bi-{icon} text-{color}"></i><slot /></div>