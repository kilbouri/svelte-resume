<script>
	import Title from "./Title.svelte";
	import Experience from "./Experience.svelte";
	export let ref;

	const getJobs = async () => {
		let res = await fetch("./jobs.json");
	    let jobs = await res.json();
    	return jobs;
	}
	const jobPromise = getJobs();
</script>

<div class={ref}>
	<Title name="Experience"/>
	{#await jobPromise}
		<p>Loading</p>
	{:then jobs} 
		{#each jobs as job}
			<Experience job={job}/>
		{/each}
	{/await}
</div>
