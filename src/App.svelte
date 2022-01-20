<script>
	import Heading from './Heading.svelte';
	import Column from './Column.svelte';
</script>

<main>
	<Heading></Heading>
	<div style="display: flex;">
		<Column ref="col1"></Column>
		<Column ref="col2"></Column>	
	</div>
</main>

<style>
	main {
		margin: 0;
		padding: 0;
	}
</style>