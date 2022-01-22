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
            <h4><a href="{project.link}"><i class="fa fa-github"></i>{project.title}</a></h4>
            <ul>
            {#each project.points as point}
                <li>- {@html point.text}</li>
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

    h4{
        font-size: 14px;
        font-weight: 600;
        margin: 5px 0px;
    }

    i {
        margin-right: 3px;
    }

    ul {
        padding-left: 0;
        margin: 5px 0px;
        list-style-type: none;
    }
    li {
        font-size: 12px;
    }
</style>