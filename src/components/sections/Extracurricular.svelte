<script lang="ts">
  import type { Extracurricular } from "../../lib/types";
  import DetailItem from "../DetailItem.svelte";
  import DetailList from "../DetailList.svelte";

  export let items: Extracurricular[];
</script>

<DetailList>
  {#each items as item}
    <DetailItem>
      <b>{[item.title, item.location].filter((x) => x).join(" | ")}</b>: {@html item.description}
    </DetailItem>
  {/each}
</DetailList>
<ul></ul>
