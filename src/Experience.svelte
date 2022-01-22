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
            <h3>{job.title}</h3>
            <h4>{job.company}</h4>
            <div class="info" style="width: 100%;">
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
                <li>- {@html point.text}</li>
            {/each}
            </ul>
        </div>
        <div class="break"></div>        
        {/each}
    {/await}
</div>

<style>
    h3{
        font-size: 16px;
        font-weight: 400;
        margin: 5px 0px;
    }

    h4{
        font-size: 14px;
        font-weight: 600;
        margin: 5px 0px;
    }

    .info{
        display: flex;
        justify-content: space-between;
    }

    i {
        margin-right: 3px;
    }

    span{
        font-size: 12px;
        padding-right: 20px;        
    }

    ul {
        padding-left: 0;
        margin: 5px 0px;
        list-style-type: none;
    }
    li {
        font-size: 12px;
    }
    .break {
        border:none;
        border-top: 1px dashed #888;
        margin: 10px 0px;
    }
</style>