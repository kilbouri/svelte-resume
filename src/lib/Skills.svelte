<script>
  import Title from "./Title.svelte";
</script>

<div class="skills">
  <Title name="Skills" />
  {#await fetch("./skills.json").then((r) => r.json())}
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
  .skill {
    font-size: 14px;
  }
</style>
