<script lang="ts">
  import Title from "./Title.svelte";
</script>

<div class="extracurricular">
  <Title name="Extracurricular" />
  {#await fetch("./extracurricular.json").then((r) => r.json())}
    <p>Loading extracurricular...</p>
  {:then extras}
    <ul>
      {#each extras as extra}
        <li class="point-text">
          - <b>{extra.title}</b>: {@html extra.description}
        </li>
      {/each}
    </ul>
  {/await}
</div>
