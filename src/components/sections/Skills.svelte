<script lang="ts">
  import type { Skill } from "../../lib/types";
  import DetailList from "../DetailList.svelte";

  export let items: Skill[];
</script>

<DetailList>
  {#each items as skill}
    <ul class="skill">
      <b>{skill.category}</b>:
      {skill.items.join(", ")}
    </ul>
  {/each}
</DetailList>

<style>
  .skill {
    font-size: 14px;
  }
</style>
