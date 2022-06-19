<script lang="ts">
	import { filedrop } from "filedrop-svelte";
	import type { Files, FileDropOptions } from "filedrop-svelte";
	let options: FileDropOptions = {};
	let files: Files;
</script>

<div use:filedrop={options} on:filedrop={(e) => {files = e.detail.files}}>
	<!-- you can add your input[type="file"] here if you want.
	or you can omit it and it'll be appended -->
	Drag &amp; drop files
</div>