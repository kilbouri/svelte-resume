<script lang="ts">
  import Title from "./Title.svelte";
</script>

<div class="projects">
  <Title name="Projects" />
  {#await fetch("./projects.json").then((r) => r.json())}
    <p>Loading projects...</p>
  {:then projects}
    {#each projects as project}
      <div class="project">
        <h4 class="secondary-heading">
          <a href={project.link}><i class="fa fa-github"></i>{project.title}</a>
        </h4>
        <ul>
          {#each project.points as point}
            <li class="point-text">- {@html point.text}</li>
          {/each}
        </ul>
      </div>
      {#if project != projects[projects.length - 1]}
        <div class="dotted-separator"></div>
      {/if}
    {/each}
  {/await}
</div>

<style>
  .project {
    padding-bottom: 3px;
  }
</style>
