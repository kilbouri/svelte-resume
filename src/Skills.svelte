<script>
    import Title from "./Title.svelte";
	const getSkills = async () => {
		let res = await fetch("./skills.json");
	    let skills = await res.json();
    	return skills;
	}
	const skillsPromise = getSkills();
    
</script>

<div class="skills">
    <Title name="Skills"/>
    {#await skillsPromise}
        <p>Loading skills...</p>
    {:then skills}
        <ul>
            {#each skills as skill}
                <li class="skill"><b>{skill.type}</b>: {skill.list}</li>
            {/each}
        </ul>
    {/await}
</div>

<style>
    .skill{
        font-size: 14px;
    }
</style>