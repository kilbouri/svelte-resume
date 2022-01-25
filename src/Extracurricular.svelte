<script>
    import Title from "./Title.svelte";
	const getExtra = async () => {
		let res = await fetch("./extracurricular.json");
	    let extras = await res.json();
    	return extras;
	}
	const extraPromise = getExtra();
    
</script>

<div class="extracurricular">
    <Title name="Extracurricular"/>
    {#await extraPromise}
        <p>Loading extracurricular...</p>
    {:then extras} 
        <ul>
            {#each extras as extra}
                <li class="point-text">- <b>{extra.title}</b> | {extra.description}</li>
            {/each}
        </ul>
    {/await}
</div>
