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
    <h3>{edu.degree}</h3>
    <h4>{edu.school}</h4>
    <div class="info" style="width: 100%;">
        <span>
            <i class="fa fa-calendar"></i>
            {edu.duration}
        </span>
    </div>
    <ul>
        {#each edu.points as point}
        <li>- {@html point.text}</li>
        {/each}
    </ul>        
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
</style>