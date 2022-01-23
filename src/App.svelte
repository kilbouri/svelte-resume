<script>
	import Header from './Header.svelte';
	import Experience from "./Experience.svelte";
	import Education from './Education.svelte';
	import Projects from './Projects.svelte';
</script>

<Header />
<main>
	<div style="width: 50%">
		<Experience />
	</div>

	<div style="width: 45%;">
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