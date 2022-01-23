<script>
    import Title from './Title.svelte';
    const getProjects = async () => {
		let res = await fetch("./projects.json");
	    let projects = await res.json();
    	return projects;
	}
	const projectPromise = getProjects();

</script>

<div class="projects">
    <Title name="Projects"/>
    {#await projectPromise}
    <p>Loading projects...</p>        
    {:then projects} 
        {#each projects as project}
        <div class="project">
            <h4 class="secondary-heading"><a href="{project.link}"><i class="fa fa-github"></i>{project.title}</a></h4>
            <ul>
            {#each project.points as point}
                <li class="point-text">- {@html point.text}</li>
            {/each}
            </ul>
        </div>
        {/each}
    {/await}
</div>

<style>
    .project {
        padding-bottom: 3px;
    }
</style>