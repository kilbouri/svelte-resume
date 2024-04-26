<script lang="ts">
  import type { Experience } from "../../lib/types";
  import { dateRange } from "../../lib/util";
  import DetailItem from "../DetailItem.svelte";
  import DetailList from "../DetailList.svelte";
  import DottedRule from "../DottedRule.svelte";
  import PrimaryHeading from "../PrimaryHeading.svelte";
  import SecondaryHeading from "../SecondaryHeading.svelte";

  export let items: Experience[];
</script>

{#each items as position, index}
  <div class="job">
    <PrimaryHeading>{position.title}</PrimaryHeading>
    <SecondaryHeading>{position.company}</SecondaryHeading>

    <div class="icon-row" style="width: 100%;">
      <span>
        <i class="fa fa-calendar"></i>
        {dateRange(position.start, position.end)}
      </span>

      {#if position.location}
        <span>
          <i class="fa fa-map-marker"></i>
          {position.location}
        </span>
      {/if}
    </div>

    <DetailList>
      {#each position.details as detailLine}
        <DetailItem>{@html detailLine}</DetailItem>
      {/each}
    </DetailList>
  </div>

  {#if index < items.length - 1}
    <DottedRule />
  {/if}
{/each}
