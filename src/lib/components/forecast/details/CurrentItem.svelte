<script>
  import {bk} from "$lib/store/breakpoints";
  export let color = "light"
  export let icon

</script>

<div class="text-light fs-{$bk == "xs" ? 6 : 5} px-3"><i class="mr-3 bi-{icon} text-{color}"></i><slot /></div>