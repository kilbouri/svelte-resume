<script>
    import Title from './Title.svelte';

    const getEdu = async () => {
            let res = await fetch("./education.json");
            let edu = await res.json();
            return edu;
        }
    const eduPromise = getEdu();
</script>


<div class="education">
    <Title name="Education"/>
    {#await eduPromise}
        <p>Loading education...</p>
    {:then edu} 
    <h3 class="primary-heading">{edu.degree}</h3>
    <h4 class="secondary-heading">{edu.school}</h4>
    <div class="icon-row" style="width: 100%;">
        <span>
            <i class="fa fa-calendar"></i>
            {edu.duration}
        </span>
    </div>
    <ul>
        {#each edu.points as point}
        <li class="point-text">- {@html point.text}</li>
        {/each}
    </ul>        
    {/await}
</div>
