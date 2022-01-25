<script>
	import Header from './Header.svelte';
	import Education from './Education.svelte';
	import Experience from "./Experience.svelte";
	import Skills from './Skills.svelte';
	import Projects from './Projects.svelte';
	import Extracurricular from './Extracurricular.svelte';
</script>

<Header />
<main>
	<div style="width: 50%">
		<Experience />
		<Extracurricular />
	</div>

	<div style="width: 45%;">
		<Education />
		<Skills />
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