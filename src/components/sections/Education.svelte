<script lang="ts">
  import type { Education } from "../../lib/types";
  import { dateRange } from "../../lib/util";

  import PrimaryHeading from "../PrimaryHeading.svelte";
  import SecondaryHeading from "../SecondaryHeading.svelte";
  import DetailList from "../DetailList.svelte";
  import DetailItem from "../DetailItem.svelte";
  import DottedRule from "../DottedRule.svelte";

  export let items: Education[];
</script>

{#each items as education, index}
  <div class="education">
    <PrimaryHeading>{education.certification}</PrimaryHeading>
    <SecondaryHeading>{education.location}</SecondaryHeading>

    <div class="icon-row" style="width: 100%;">
      <span>
        <i class="fa fa-calendar"></i>
        {dateRange(education.start, education.end)}
      </span>
    </div>

    {#if education.details}
      <DetailList>
        {#each education.details as detail}
          <DetailItem>{@html detail}</DetailItem>
        {/each}
      </DetailList>
    {/if}
  </div>

  {#if index < items.length - 1}
    <DottedRule />
  {/if}
{/each}
