<script lang="ts">
  import type { Project } from "../../lib/types";
  import DetailItem from "../DetailItem.svelte";
  import DetailList from "../DetailList.svelte";
  import DottedRule from "../DottedRule.svelte";
  import SecondaryHeading from "../SecondaryHeading.svelte";

  export let items: Project[];
</script>

{#each items as project, index}
  <div class="project">
    <SecondaryHeading>
      <a href={project.link} target="_blank">
        <i class="fa fa-github"></i>
        {project.title}
      </a>
    </SecondaryHeading>

    <DetailList>
      {#each project.details as detail}
        <DetailItem>{@html detail}</DetailItem>
      {/each}
    </DetailList>
  </div>

  {#if index < items.length - 1}
    <DottedRule />
  {/if}
{/each}

<style>
  .project {
    padding-bottom: 3px;
  }
</style>
