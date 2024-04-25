<script lang="ts">
  import Title from "./Title.svelte";
</script>

<div class="education">
  <Title name="Education" />
  {#await fetch("./education.json").then((r) => r.json())}
    <p>Loading education...</p>
  {:then edus}
    {#each edus as edu}
      <div class="education">
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
      </div>
      {#if edu != edus[edus.length - 1]}
        <div class="dotted-separator"></div>
      {/if}
    {/each}
  {/await}
</div>
