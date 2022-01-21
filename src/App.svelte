<script>
	import Header from './Header.svelte';
	import Left from './Left.svelte';
	import Right from './Right.svelte';
</script>

<main>
	<Header></Header>
	<div style="display: flex; justify-content:space-between">
		<Left ref="left"></Left>
		<Right ref="right"></Right>	
	</div>
</main>

<style>
	main {
		margin: 0;
		padding: 0;
	}
</style>