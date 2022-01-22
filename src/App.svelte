<script>
	import Header from './Header.svelte';
	import Experience from "./Experience.svelte";
	import Education from './Education.svelte';
	import Projects from './Projects.svelte';
</script>

<Header />
<main>
	<div class="column-1">
		<Experience />
	</div>

	<div class="column-2">
		<Education />
		<Projects />
	</div>
</main>

<style>
	main {
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: space-between
	}
</style>