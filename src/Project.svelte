<script>
    export let project;
</script>


<div class="project">
    <h4><a href="{project.link}"><i class="fa fa-github"></i>{project.title}</a></h4>
    <ul>
    {#each project.points as point}
        <li>- {@html point.text}</li>
    {/each}
    </ul>
</div>
<!-- <div class="break"></div> -->

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