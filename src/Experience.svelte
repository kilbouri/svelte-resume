<script>
    import Title from "./Title.svelte";
	const getJobs = async () => {
		let res = await fetch("./experience.json");
	    let jobs = await res.json();
    	return jobs;
	}
	const jobPromise = getJobs();
    
</script>

<div class="experience">
    <Title name="Experience"/>
    {#await jobPromise}
        <p>Loading experience...</p>
    {:then jobs} 
        {#each jobs as job}
        <div class="job">
            <h3 class="primary-heading">{job.title}</h3>
            <h4 class="secondary-heading">{job.company}</h4>
            <div class="icon-row" style="width: 100%;">
                <span>
                    <i class="fa fa-calendar"></i>
                    {job.time}
                </span>
                <span>
                    <i class="fa fa-map-marker"></i>
                    {job.location}
                </span>
            </div>
            <ul>
            {#each job.points as point}
                <li class="point-text">- {@html point.text}</li>
            {/each}
            </ul>
        </div>
        {#if job != jobs[jobs.length - 1]}
        <div class="dotted-separator"></div>            
        {/if}
        {/each}
    {/await}
</div>
