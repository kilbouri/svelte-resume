<script>
	import Title from './Title.svelte';
	import Education from './Education.svelte';
	import Project from './Project.svelte';
	export let ref;

	const getProjects = async () => {
		let res = await fetch("./projects.json");
	    let projects = await res.json();
    	return projects;
	}
	const projectPromise = getProjects();

</script>

<div class={ref}>
	<Title name="Education"/>
	<Education/>
	<Title name="Projects"/>
	{#await projectPromise}
	<p>Loading</p>
	{:then projects} 
		{#each projects as project}
			<Project project={project}/>
		{/each}
	{/await}

</div>
